sap.ui.define([
    "./BaseController"
], function (
    BaseController
) {
    "use strict";

    return BaseController.extend("z.smart.lrn.controller.SmartFilterBar", {

        onInit : function () {

            this.getRouter().getRoute("smartFilterBar").attachMatched(this._onRouteMatch, this);
        },

        /**
         * handle route match event
         * @param {sap.ui.base.Event} oEvent 
         */
        _onRouteMatch: function(oEvent){

        },

        /**
         * Metadata is available for control  
         * @param {sap.ui.base.Event} oEvent 
         */
         onMetadataAvailableInSmartFilter: function(oEvent){
            
        },


        /**
         * Variant is applied and SmartFilterBar is in stable state
         * @param {sap.ui.base.Event} oEvent 
         */
         onSelectionVariantAppliedInSmartFilter: function(oEvent){

        },


        /**
         * search start
         * @param {sap.ui.base.Event} oEvent 
         */
        onSearch: function(oEvent){

        },


        /**
         * smart table initialised
         * @param {sap.ui.base.Event} oEvent 
         */
        onInitialiseSmartTable: function(oEvent){

        },

        /**
         * setup table binding settings
         * @param {sap.ui.base.Event} oEvent 
         */
        onBeforeRebindSmartTable: function(oEvent){

        }

    });

}, true);