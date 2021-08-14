sap.ui.define([
    "./BaseController"
], function (
    BaseController
) {
    "use strict";

    return BaseController.extend("z.smart.lrn.controller.SmartForm", {

        onInit : function () {

            this.getRouter()
                .getRoute("smartForm")
                .attachMatched(this._onRouteMatch, this);
        },

        /**
         * handle route match event
         * @param {sap.ui.base.Event} oEvent 
         */
        _onRouteMatch: function(oEvent){
            var oSmartForm1 = this.byId("smartForm1");
            var oSmartForm2 = this.byId("smartForm2");
            var oModel = this.getModel();
            var sPath1 = oModel.createKey("/HeaderSet", {
                Guid: "ecd40596-33eb-4192-b6f1-8a3ce393369a"
            });

            var sPath2 = sPath1;
            sPath2 = oModel.createKey("/HeaderSet", {
                Guid: "99739da1-0057-420c-83c7-b16abaf6bd89"
            });

            oModel.metadataLoaded().then(function(){
                oSmartForm1.bindElement({
                    path: sPath1
                });

                oSmartForm2.bindElement({
                    path: sPath2
                });
            });
        }

    });

}, true);