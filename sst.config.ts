import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";
import { RetentionDays } from "aws-cdk-lib/aws-logs";

export default {
  config(_input) {
    return {
      name: "knowles-glass",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
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
        },
        environment: {},
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
