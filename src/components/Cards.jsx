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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. <strong></strong>
                </p>
                <hr />
                <p>Lorem ipsum dolor sit amet. <strong></strong>
                </p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, itaque veniam alias consequuntur modi ratione voluptates quos molestiae sit delectus.
                </p>
                <hr />
                {/* <p>Choose your drizzle: <strong>cherry-balsamic vinegar</strong>, <strong>local honey</strong>, or
                <strong>housemade chocolate sauce</strong>.
                </p> */}
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
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum in eveniet facilis iure maiores architecto fugit odio ratione laudantium?
                </p>
                <hr />
                {/* <p>Choose your drizzle: <strong>cherry-balsamic vinegar</strong>, <strong>local honey</strong>, or
                <strong>housemade chocolate sauce</strong>.
                </p> */}
            </div>
            </div>
        </div>
        </li>

        <li className="cards_item">
        <div className="card">
            <div className="card_image">
                <span className="note">Beginner</span>
                <a href='https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/'>
                    <img src="images/ceh.png" alt="CEH logo" />
                </a>
                <span className="card_price"><span>$</span>1199</span>
            </div>
            <div className="card_content">
            <h2 className="card_title">Certified Ethical Hacker (CEH)</h2>
            <div className="card_text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, nisi? Nihil sunt aspernatur quibusdam eveniet. Quas quasi maxime in porro.
                </p>
                <hr />
                {/* <p>Choose your drizzle: <strong>cherry-balsamic vinegar</strong>, <strong>local honey</strong>, or
                <strong>housemade chocolate sauce</strong>.
                </p> */}
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum assumenda saepe eaque exercitationem tempora unde inventore nemo itaque, quod quae, explicabo, tempore cum adipisci eius molestias sequi neque. Aliquam, incidunt.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque hic repudiandae officiis laboriosam minima quasi, a quo eligendi omnis! Totam molestiae voluptatibus temporibus aliquam aut voluptate? Nihil libero, facere, sit expedita iste nostrum ipsam accusantium provident quae aliquid voluptatibus suscipit debitis consectetur? Eos deserunt aliquid aspernatur iste saepe. Unde, beatae?
                </p>
                <hr />
                {/* <p>This unforgettable sandwich has all of the classNameic Reuben elements: <strong>corned beef</strong>, <strong>rye
                    bread</strong>, <strong>creamy Russian dressing</strong>, <strong>sauerkraut</strong>, plus a <strong>sweet gherkin pickle</strong>.
                No substitions please!
                </p> */}
                {/* <p>Add a side of <strong>french fries</strong> or <strong>sweet potato fries</strong> for $2 more, or our
                <strong>housemade pub chips</strong> for $1.
                </p> */}
            </div>
            </div>
        </div>
        </li>

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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eveniet quas et totam accusantium. In consequuntur repudiandae fugiat id maiores?
                </p>
                <hr />
                {/* <p>Choose your drizzle: <strong>cherry-balsamic vinegar</strong>, <strong>local honey</strong>, or
                <strong>housemade chocolate sauce</strong>.
                </p> */}
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eveniet nam assumenda odit doloribus cum, tempora sunt iste omnis est.
                </p>
                <hr />
                {/* <p>Choose your drizzle: <strong>cherry-balsamic vinegar</strong>, <strong>local honey</strong>, or
                <strong>housemade chocolate sauce</strong>.
                </p> */}
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nemo mollitia vitae similique asperiores, aperiam tenetur! Tenetur officiis excepturi totam!
                </p>
                <hr />
                {/* <p>Choose your drizzle: <strong>cherry-balsamic vinegar</strong>, <strong>local honey</strong>, or
                <strong>housemade chocolate sauce</strong>.
                </p> */}
            </div>
            </div>
        </div>
        </li>
    </ul>
    </div>

  )
}

export default Cards