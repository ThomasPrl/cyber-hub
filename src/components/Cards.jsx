import React, { useState } from 'react'


function Cards() {
    
    const [cards] = useState([
        {
            title: 'IBM Cybersecurity Analyst Professional Certificate',
            text: ``,
            price:'46€ per month, financial aid available.',
            level:'Beginner',
            time:'3 months, with 10 hours of study a week',
            link:'https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst'
        },
        {
            title: 'Card-2',
            text: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nostrum velit, laudantium nemo quam praesentium a expedita excepturi aliquid tempora.`
        },
        {
            title: 'Card-3',
            text: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nostrum velit, laudantium nemo quam praesentium a expedita excepturi aliquid tempora.`,
            link:''
        },
        {
            title: 'Card-4',
            text: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nostrum velit, laudantium nemo quam praesentium a expedita excepturi aliquid tempora.`,
            link:''
        },
        {
            title: 'Card-5',
            text: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nostrum velit, laudantium nemo quam praesentium a expedita excepturi aliquid tempora.`,
            link:''
        },
        {
            title: 'Card-6',
            text: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nostrum velit, laudantium nemo quam praesentium a expedita excepturi aliquid tempora.`,
            link:''
        },
    ])
    return (


    <div className="main">

    <div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-gray-400"></div>
        <span class="flex-shrink mx-4 text-blue-600">Analyst</span>
        <div class="flex-grow border-t border-gray-400"></div>
    </div>


    <ul className="cards">
        <li className="cards_item">
        <div className="card card-hover">
            <div className="card_image">
                <span className="note">Begginer</span>
                <a href='https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst'>
                    <img src="/images/ibm-security.png" alt="ibm-security logo" />
                </a>
                <span className="card_price"><span>$</span>49,50</span>
            </div>
            <div className="card_content">
                <h2 className="card_title">IBM Cybersecurity Analyst Professional Certificate</h2>
            <div className="card_text">
                <p><strong>Time to complete:</strong> 3 months, with 10 hours of study a week</p>
                <hr />
                <p>The course is separated in different parts:<br/>
                <strong>1.</strong> Introduction to Cybersecurity Tools & Cyber Attacks.<br/>
                <strong>2.</strong> Cybersecurity Roles, Processes & Operating System Security.<br/>
                <strong>3.</strong> Cybersecurity Compliance Framework & System Administration.<br/>
                <strong>4.</strong> Network Security & Database Vulnerabilities.<br/>
                <strong>5.</strong> Penetration Testing, Incident Response & Forensics.<br/>
                <strong>6.</strong> Cyber Threat Intelligence.<br/>
                <strong>7.</strong> Cybersecurity Capstone : Breach Response Case Studies.<br/>
                </p>
            </div>
            </div>
        </div>
        </li>

        <li className="cards_item">
        <div className="card">
            <div className="card_image">
                <span className="note">Intermediate</span>
                <a href='https://www.comptia.org/certifications/cybersecurity-analyst'>
                    <img src="images/cysa.png" alt="Cysa logo" />
                </a>
                <span className="card_price"><span>$</span>392</span>
            </div>
            <div className="card_content">
            <h2 className="card_title">CompTIA Cybersecurity Analyst (CySA+)</h2>
            <div className="card_text">
                <p><strong>Validity:</strong> No expiration, but the certification is recommended to be renewed every three years.</p>
                <p><strong>Knowledge Requirements:</strong> Skills in performing data analysis, vulnerability management, threat and incident response, and applying security controls.</p>
                <p><strong>Experience Requirements:</strong> A minimum of 4 years of experience in the field is recommended.</p>
                <p><strong>Targeted Jobs:</strong> Security analyst, cybersecurity specialist, threat intelligence analyst, and similar entry-level security positions.</p>
            </div>
            </div>
        </div>
        </li>

        <li className="cards_item">
        <div className="card">
            <div className="card_image">
                <span className="note">Intermediate</span>
                <a href='https://www.giac.org/certifications/security-essentials-gsec/'>
                    <img src="images/GSEC.png" alt="GSEC logo" />
                </a>
                <span className="card_price"><span>$</span>1899</span>
            </div>
            <div className="card_content">
            <h2 className="card_title">GIAC Security Essentials Certification (GSEC)</h2>
            <div className="card_text">
                <p><strong>Validity:</strong> Certification remains valid for four years, after which it can be renewed.</p>
                <p><strong>Knowledge Requirements:</strong> Fundamental knowledge of information security concepts, including networking, protocols, operating systems, access controls, and incident response.</p>
                <p><strong>Targeted Jobs:</strong> Security analyst, security consultant, IT auditor, network administrator, and similar entry-level cybersecurity roles.</p>
            </div>
            </div>
        </div>
        </li>

        <li className="cards_item">
        <div className="card">
            <div className="card_image">
                <span className="note">Advanced</span>
                <a href='https://www.giac.org/certifications/certified-forensic-analyst-gcfa/'>
                    <img src="images/GCFA.png" alt="GCFA logo" />
                </a>
                <span className="card_price"><span>$</span>1899</span>
            </div>
            <div className="card_content">
            <h2 className="card_title">GIAC Certified Forensic Analyst (GCFA)</h2>
            <div className="card_text">
                <p><strong>Validity:</strong> Certification remains valid for four years, after which it can be renewed.</p>
                <p><strong>Knowledge Requirements:</strong> Expertise in incident response, digital forensics, and evidence analysis, including disk and memory forensics, network forensics, and malware analysis.</p>
                <p><strong>Targeted Jobs:</strong> Digital forensics analyst, incident responder, cybersecurity researcher, forensics consultant, and similar roles.</p>
            </div>
            </div>
        </div>
        </li>

    </ul>

    <div class="relative flex mt-10 py-5 items-center">
        <div class="flex-grow border-t border-gray-400"></div>
        <span class="flex-shrink mx-4 text-blue-600">Specialist</span>
        <div class="flex-grow border-t border-gray-400"></div>
    </div>

    <ul className="cards">
        <li className="cards_item">
        <div className="card">
            <div className="card_image">
                <span className="note">Intermediate</span>
                <a href='https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/'>
                    <img src="images/ceh.png" alt="CEH logo" />
                </a>
                <span className="card_price"><span>$</span>1199</span>
            </div>
            <div className="card_content">
            <h2 className="card_title">Certified Ethical Hacker (CEH)</h2>
            <div className="card_text">
                <p><strong>Validity:</strong> Certified individuals must earn Continuing Professional Development (CPD) credits to maintain their certification every three years.</p>
                <p><strong>Knowledge requirements:</strong> Understanding of ethical hacking methodologies, techniques, and tools. Familiarity with vulnerabilities, common exploits, and countermeasures.</p>
                <p><strong>Other requirement:</strong> before being authorized to take the exam, an application is required and will be reviewed by the council.</p>
                <p><strong>Targeted jobs:</strong> Ethical hacker, penetration tester, security analyst, security consultant, and related roles.</p>
                <hr />
                <p>There are trainings provided by CEH, which range from $850 to $2,999 for the Certified Ethical Hacker training.</p>

            </div>
            </div>
        </div>
        </li>

        <li className="cards_item">
        <div className="card">
            <div className="card_image">
                <span className="note">Advanced</span>
                <a href='https://www.isc2.org/Certifications/cissp/Certification-Exam-Outline'>
                    <img src="/images/cissp.png" alt="cissp logo" />
                </a>
                <span className="card_price"><span>$</span>749</span>
            </div>
            <div className="card_content">
            <h2 className="card_title">Certified Information Systems Security Professional (CISSP)</h2>
            <div className="card_text">
                <p><strong>Validity:</strong> Certified individuals must earn Continuing Professional Education (CPE) credits to maintain their certification every three years.</p>
                <p><strong>Knowledge requirements:</strong> Broad knowledge of various cybersecurity domains, including security and risk management, asset security, security architecture and engineering, communication and network security, identity and access management, security assessment and testing, security operations, and software development security.</p>
                <p><strong>Experience requirements:</strong> A minimum of 5 years of experience in the field is required.</p>
                <p><strong>Targeted jobs:</strong> Security consultant, security analyst, security manager, security auditor, IT auditor, security architect, and similar roles.</p>

                <hr />

                <p>Domains covered:<br/>
                <strong>1.</strong> Security and Risk Management<br/>
                <strong>2.</strong> Asset Security<br/>
                <strong>3.</strong> Security Architecture and Engineering<br/>
                <strong>4.</strong> Communication and Network Security<br/>
                <strong>5.</strong> Identity and Access Management (IAM)<br/>
                <strong>6.</strong> Security Assessment and Testing<br/>
                <strong>7.</strong> Security Operations<br/>
                <strong>8.</strong> Software Development Security<br/></p>
                <p>The exam takes 4 hours.</p>


            </div>
            </div>
        </div>
        </li>

        <li className="cards_item">
        <div className="card">
            <div className="card_image">
                <span className="note">Advanced</span>
                <a href='https://www.comptia.org/certifications/security'>
                    <img src="images/security+.png" alt="Security+ logo" />
                </a>
                <span className="card_price"><span>$</span>392</span>
            </div>
            <div className="card_content">
            <h2 className="card_title">CompTIA Security+</h2>
            <div className="card_text">
                <p><strong>Validity:</strong> No expiration, but the certification is recommended to be renewed every three years.</p>
                <p><strong>Knowledge Requirements:</strong> Fundamental knowledge of network security, threats, vulnerabilities, cryptography, access control, identity management, and security best practices.</p>
                <p><strong>Targeted Jobs:</strong> Security specialist, security analyst, network administrator, systems administrator, and similar entry-level cybersecurity roles.</p>
            </div>
            </div>
        </div>
        </li>
    </ul>

    <div class="relative flex mt-10 py-5 items-center">
        <div class="flex-grow border-t border-gray-400"></div>
        <span class="flex-shrink mx-4 text-blue-600">Manager</span>
        <div class="flex-grow border-t border-gray-400"></div>
    </div>

    <ul className="cards">
        <li className="cards_item">
        <div className="card">
            <div className="card_image">
                <span className="note">Intermediate</span>
                <a href='https://www.isaca.org/credentialing/cism#/store/browse/cat/a2D4w00000Ac6NNEAZ/tiles'>
                    <img src="images/cism.png" alt="CISM logo" />
                </a>
                <span className="card_price"><span>$</span>575</span>
            </div>
            <div className="card_content">
            <h2 className="card_title">Certified Information Security Manager (CISM)</h2>
            <div className="card_text">
                <p><strong>Validity:</strong> Certified individuals must earn Continuing Professional Education (CPE) credits to maintain their certification every three years.</p>
                <p><strong>Knowledge requirements:</strong> Understanding of information security management, including governance, risk management, program development, incident management, and compliance.</p>
                <p><strong>Targeted jobs:</strong> Information security manager, IT auditor, IT consultant, security consultant, risk manager, and similar roles.</p>
                <hr />
                <p>A course is available to prepare for the exam, which you can register for and have access to it for one year. The prices are:<br/>
                -	$895.00 (Non-member Pricing)<br/>
                -	$795.00 (Member Pricing)
                </p>
            </div>
            </div>
        </div>
        </li>

    </ul>
    </div>


  )
}

export default Cards