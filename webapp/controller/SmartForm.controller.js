sap.ui.define([
    "./BaseController"
], function (
    BaseController
) {
    "use strict";

    return BaseController.extend("z.smart.lrn.controller.SmartForm", {

        onInit : function () {

            this.getRouter().getRoute("smartForm").attachMatched(this._onRouteMatch, this);
        },

        /**
         * handle route match event
         * @param {sap.ui.base.Event} oEvent 
         */
        _onRouteMatch: function(oEvent){
            var oSmartForm = this.byId("smartForm");
            var oModel = this.getModel();
            var sPath = oModel.createKey("/HeaderSet", {
                Guid: "ecd40596-33eb-4192-b6f1-8a3ce393369a"
            });

            oModel.metadataLoaded().then(function(){
                oSmartForm.bindElement({
                    path: sPath
                });
            });
        }

    });

}, true);