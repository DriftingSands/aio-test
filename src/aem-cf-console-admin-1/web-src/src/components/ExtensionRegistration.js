/*
 * <license header>
 */

import { generatePath } from "react-router";
import { Text } from "@adobe/react-spectrum";
import { register } from "@adobe/uix-guest";

import { extensionId } from "./Constants";

function ExtensionRegistration() {
  const init = async () => {
    const guestConnection = await register({
      id: extensionId,
      methods: {
        // Configure your Action Bar button here
        actionBar: {
          getButton() {
            return {
              id: "cf-editor-button",
              label: "Open in CF Editor",
              icon: "Edit",
            };
          },

          onClick(selections) {
            // const modalURL =
            //   "/index.html#" +
            //   generatePath("/content-fragment/:fragmentId/cf-editor-test-modal", {
            //     fragmentId: encodeURIComponent(selections[0].id),
            //   });
            // console.log("Modal URL: ", modalURL);

            // guestConnection.host.modal.showUrl({
            //   title: "cf-editor-test",
            //   url: modalURL,
            // });
            window
              .open(`https://cf-editor-sage.vercel.app/?path=${encodeURIComponent(selections[0].id)}`, "_blank")
              .focus();
          },
        },

        // Configure your Header Menu button here
        // headerMenu: {
        //   getButton() {
        //     return {
        //       id: "cf-editor-test-header",
        //       label: "cf-editor-test-header",
        //       icon: "OpenIn",
        //     };
        //   },

        //   onClick() {
        //     const modalURL = "/index.html#/cf-editor-test-header-modal";
        //     console.log("Modal URL: ", modalURL);

        //     guestConnection.host.modal.showUrl({
        //       title: "cf-editor-test-header",
        //       url: modalURL,
        //     });
        //   },
        // },
      },
    });
    // console.log("DID NOT CAUSE ERROR!");
  };
  init().catch(console.log);

  return <Text>IFrame for integration with Host (AEM)...</Text>;
}

export default ExtensionRegistration;
