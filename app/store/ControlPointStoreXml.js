/*
 * File: app/store/ControlPointStoreXml.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.ControlPointStoreXml', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.ControlPointModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Xml'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'MyApp.model.ControlPointModel',
            storeId: 'ControlPointStoreXml',
            proxy: {
                type: 'ajax',
                url: '/dsnwebui/dsnwebui_rest/ControlPointStoreXml',
                reader: {
                    type: 'xml',
                    rootProperty: 'root',
                    record: 'record'
                }
            }
        }, cfg)]);
    }
});