sap.ui.define([
    "./BaseController"
], function (
    BaseController
) {
    "use strict";

    return BaseController.extend("z.smart.lrn.controller.SmartChart", {

        onInit : function () {

            this.getRouter().getRoute("smartChart").attachMatched(this._onRouteMatch, this);

        },

        /**
         * handle route match event
         * @param {sap.ui.base.Event} oEvent route matched 
         */
        _onRouteMatch: function(oEvent){
            

        }

    });

}, true);