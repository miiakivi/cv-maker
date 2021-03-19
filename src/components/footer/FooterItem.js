import openItemEditingForm from "../../helpers/openItemEditingForm";
import React from "react";

function FooterItem(props) {
    let item = props.valueObj;
    return (
        <div onClick={ ()=>{
            if ( props.globalEditingMode ) openItemEditingForm(item, props.stateUpdater)
        } }
            className="footer__item pointer">
            <h4 className="row">{ item.refName } <span className="material-icons settings-icon">settings</span></h4>
            <p>
        { item.jobTitle } <br/>
        { item.companyName } <br/>
        { item.howToReach } <br/>
            </p>
            </div>
            )
            }

            export default FooterItem;