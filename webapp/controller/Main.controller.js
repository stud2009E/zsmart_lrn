sap.ui.define([
    "./BaseController"
], function (
    BaseController
) {
    "use strict";

    return BaseController.extend("z.smart.lrnotnsp .controller.Main", {

        onInit : function () {

            this.getRouter().getRoute("main").attachMatched(this._onRouteMatch, this);
        },

        /**
         * handle route match event
         * @param {sap.ui.base.Event} oEvent 
         */
        _onRouteMatch: function(oEvent){



        },

        /**
         * handle table cell click
         * @param {sap.ui.base.Event} oEvent
         */
        onTableCellClick: function(oEvent){
            var oCtx = oEvent.getParameter("rowBindingContext");
            var oContainer = this.byId("smartContainer");

            oContainer.setBindingContext(oCtx);
        }

    });

});