/** Based on Ext.ux.form.TwinCombo from http://www.sencha.com/forum/showthread.php?55191,
 *  modified to extend Ext.ux.form.LovCombo
 */

Ext.ns('Ext.ux.form');

/**
 * Creates new TwinLovCombo
 * @constructor
 * @param {Object} config A config object
 */

Ext.ux.form.TwinLovCombo = Ext.extend(Ext.ux.form.LovCombo, {

     trigger1Class:''
    ,trigger2Class:''
    ,fireTrigger2Events:true

    // {{{
    ,initComponent:function() {

        // setup config
        var config = {
            triggerConfig:{
                 tag:'span', cls:'x-form-twin-triggers', cn:[
                     Ext.apply({tag: "img", src: Ext.BLANK_IMAGE_URL, cls: "x-form-trigger " + this.trigger1Class}, this.trigger1Qtip && {'ext:qtip':this.trigger1Qtip})
                    ,Ext.apply({tag: "img", src: Ext.BLANK_IMAGE_URL, cls: "x-form-trigger " + this.trigger2Class}, this.trigger2Qtip && {'ext:qtip':this.trigger2Qtip})
            ]}
        }; // eo config object

        // apply config
        Ext.apply(this, Ext.apply(this.initialConfig, config));

        // call parent
        Ext.ux.form.TwinLovCombo.superclass.initComponent.apply(this, arguments);

        if(true === this.fireTrigger2Events) {
            this.addEvents('beforetrigger2click', 'trigger2click');
        }
    } // eo function initComponent
    // }}}

    ,afterRender:Ext.form.TwinTriggerField.prototype.afterRender
    ,initTrigger:Ext.form.TwinTriggerField.prototype.initTrigger
    ,getTrigger:Ext.form.TwinTriggerField.prototype.getTrigger
    ,onTrigger1Click:function() {
        this.onTriggerClick.apply(this, arguments);
    }
    ,onTrigger2Click:function(e, el) {
        if(true === this.fireTrigger2Events) {
            if(false !== this.fireEvent('beforetrigger2click', this)) {
                this.fireEvent('trigger2click', this);
            }
        }
    }
}); // eo extend

// register xtype
Ext.reg('twinlovcombo', Ext.ux.form.TwinLovCombo);

// eof
