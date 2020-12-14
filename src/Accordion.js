import {React} from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel, 
    AccordionItemState
} from 'react-accessible-accordion';
import './Accordion.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";

const Accordion1 = (props) => {
    const down = <FontAwesomeIcon icon={faAngleDown}/>
    const up = <FontAwesomeIcon icon={faAngleUp}/>
    return(
    <Accordion allowMultipleExpanded allowZeroExpanded>
        <AccordionItemState/>
            <AccordionItem className="accordion__item1">
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <AccordionItemState>
                        {(state) =>
                            {
                                return(
                                    state.expanded? up: down
                                    )
                                }
                            }
                        </AccordionItemState>
                        PREDICTED ESTIMATION
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    {props.input_panel}
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion__item2">
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <AccordionItemState>
                        {(state) =>
                            {
                                return(
                                    state.expanded? up: down
                                    )
                                }
                            }
                        </AccordionItemState>
                       CUSTOM ESTIMATION
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    {props.paramBar2}
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
    }
export default Accordion1

