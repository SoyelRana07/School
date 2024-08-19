import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>The Heritage School Motto Is "Atma Deepo Bhava" or "Be Your Own Light". The children at The Heritage School are
            encouraged to explore, reach out and seek answers for themselves.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>How many wings are there?</Accordion.Header>
                    <Accordion.Body>
                        There are 3 wings i.e Pre-primary, Primary and Middle wing.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>How many boards are there?</Accordion.Header>
                    <Accordion.Body>
                        It has 3 boards:- CISCE, IGCSE and IBDP board.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>What is the admission procedure?</Accordion.Header>
                    <Accordion.Body>
                    The registration fee (Rs.2000 for IBDP & IGCSE and Rs.1500 for all other classes including SEN) is non-refundable.
                    Separate registration forms are to be submitted if a student wishes to apply for both IGCSE–I and Class IX (ICSE).
                    Separate registration forms are to be submitted if a student wishes to apply for both IBDP–I and Class XI (ISC).
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>Academics Programme and Curriculum Structure ?</Accordion.Header>
                    <Accordion.Body>
                    The Academic session at The Heritage School, Anandpur starts from April. The School provides education to students from Pre-nursery to XII.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;