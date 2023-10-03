import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";
import * as acm from "aws-cdk-lib/aws-certificatemanager";

export default {
  config(_input) {
    return {
      name: "knowles-glass",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const certificate = acm.Certificate.fromCertificateArn(
        stack,
        "Certificate",
        `arn:aws:acm:us-east-1:493255580566:certificate/d13e3d50-9583-4379-a921-674bc31a6d2d`
      );

      const site = new NextjsSite(stack, "site", {
        customDomain: {
          domainName: "knowlesglass.webdevcody.com",
          isExternalDomain: true,
          cdk: {
            certificate,
          },
        },
        timeout: "30 seconds",
        environment: {},
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
