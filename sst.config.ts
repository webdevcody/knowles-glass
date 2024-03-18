import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import * as wafv2 from "aws-cdk-lib/aws-wafv2";

export default {
  config(_input) {
    return {
      name: "knowles-glass",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const cfnWebACL = new wafv2.CfnWebACL(stack, "MyCDKWebAcl", {
        defaultAction: {
          allow: {},
        },
        scope: "CLOUDFRONT",
        visibilityConfig: {
          metricName: "MetricForWebACLCDK",
          cloudWatchMetricsEnabled: true,
          sampledRequestsEnabled: true,
        },
        rules: [
          {
            name: "LimitRequests",
            priority: 1,
            action: {
              block: {},
            },
            statement: {
              rateBasedStatement: {
                limit: 500,
                aggregateKeyType: "IP",
              },
            },
            visibilityConfig: {
              sampledRequestsEnabled: true,
              cloudWatchMetricsEnabled: true,
              metricName: "LimitRequests1000",
            },
          },
        ],
      });

      const site = new NextjsSite(stack, "site", {
        customDomain: {
          domainName: "knowlesglassandglazing.com",
          domainAlias: "www.knowlesglassandglazing.com",
        },
        timeout: "10 seconds",
        cdk: {
          server: {
            logRetention: RetentionDays.ONE_DAY,
          },
          distribution: {
            webAclId: cfnWebACL.attrArn,
          },
        },
        environment: {},
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
