import React from 'react';
import ReactPlayer from 'react-player';

// import NSA from '../assets/NSA.jpg';


const Article = () => {
  
  return (
    <div className='text-justify'>
      <h1 className="my-2 text-4xl text-gradient mb-6">Security and Privacy for 6G</h1>





      <div>
        <h2 className= "text-2xl mb-6" id="first">What is 6G ?</h2>
        <p className="mb-2">
          6G is the sixth generation standard for cellular communications that are currently under development to succeed 5G. 6G offers an ambitious vision of truly autonomous networks that will be commercially deployed someday in the 2030s. 6G will be able to support speeds of over 1Tbps, 50 times faster than 5G. The coverage and network capability will enable a wide range of digital services such as wearable displays, implantable devices, telepresence applications (rendering of 3D holographic representation of each participant in a meeting), mixed reality, tactile Internet, and autonomous driving. 
        </p>
        <p className='mb-4'>
          However it reveals new cybersecurity stakes. For instance:
        </p>
        <div className="flex flex-wrap justify-center">
          <a href="" className="inline-block text-red-700 mb-4 mr-4 border border-gray-300 p-4 rounded-lg shadow hover:bg-red-100">
              <h5 className="">Leaks of personnal information</h5>
          </a>

          <a href="#" className="inline-block text-red-700 mb-4 mr-4 border border-gray-300 p-4 rounded-lg shadow hover:bg-red-100">
              <h5 className="">Loss from an attack could be irrecoverable</h5>
          </a>

          <a href="#" className="inline-block text-red-700 mb-4 border border-gray-300 p-4 rounded-lg shadow hover:bg-red-100">
              <h5 className="">IA could be use for massive online surveillance</h5>
          </a>
        </div>
        <p className='mb-4'>
          By contrast, new technologies will appeared:
        </p>
        <div className="flex flex-wrap justify-center">
          <a href="#" className="inline-block text-green-700 mb-4 mr-4 border border-gray-300 p-4 rounded-lg shadow hover:bg-green-100">
                <h5 className="">Quantum-safe communications</h5>
            </a>

            <a href="#" className="inline-block text-green-700 mb-4 border border-gray-300 p-4 rounded-lg shadow hover:bg-green-100">
                <h5 className="">Distributed ledgers</h5>
            </a>
          </div>
        <p className='mb-4'>
          The specifity of 6G is that it could be separated into 3 layers architecture
        </p>
        <a href="#" className="mb-4 border flex flex-wrap justify-center border-gray-300 p-4 rounded-lg shadow hover:bg-green-100">
          <h5 className="text-xl">SCHEMA TODO</h5>
        </a>





        <h2 className= "text-3xl mb-4 mt-10" id="second">Security issues in 6G </h2>
        <h3 className= "text-2xl mx-2 mb-2" id="second-sub1">Evolution of architecture</h3>
        <h4 className="text-xl mx-6 mb-2" id="second-subsub1">1G (1980s-1990s)</h4>
        <p className='mb-4'>
          There was no security and privacy.
        </p>
        <h4 className="text-xl mx-6 mb-2" id="second-subsub2">2G-3G</h4>
        <p className='mb-4'>
          The most famous attack is IMSI attack (International Mobile Subscriber Identity; where the attacker exploited unencrypted identity information during authentication and paging procedures to track mobile subscribers), Moreover, absence of end-to-end encryption in communications was the root cause of many eavesdropping attacks (such as man-in-the- middle (MITM), phone fraud, and SMS interception). There are also downgrade attacks (the attacker would force a victim to connect to 2G networks which do not require mutual authentication. After downgrading successfully, the attacker could launch another man-in-the-middle (MITM) attack and freely collect the IMSI of UE for further location tracking).
        </p>
        <h4 className="text-xl mx-6 mb-2" id="second-subsub3">4G (2009)</h4>
        <p className='mb-4'>
          Many security enhancements. However there are still weaknesses: not immune to DDOS attacks (malicious application that overloads the Home Subscriber Server (HSS and Mobility Management Entity (MME) servers with multiple authentication requests). The frequency where the Global Unique Temporary Identifier (GUTI)(which is a temporary identifier used to hide a subscriber’s identity) is predictable, that breach could be used to track the location of any subscriber.
          Moreover, the architecture itself has its vulnerabilities: the decision for the authentication is made solely by the serving network, an attacker could create a fake serving network to track subscribers.
        </p>
        <h4 className="text-xl mx-6 mb-2" id="second-subsub4">5G</h4>
        <p className='mb-6'>
          5G has been upgraded significantly in terms of both security architecture and authentication protocols to satisfy a service-oriented network model as well as fixing many vulnerabilities in 4G. It adds a new domain: service-based architecture (SBA) security.
        </p>
        <div className="mb-6 border  border-gray-300 p-4 rounded-lg shadow hover:bg-yellow-100">
          <div className="flex mb-2">
            <svg className="w-8 h-8" viewBox="0 0 20 20">
              <path d="M15.684,16.959L10.879,8.52c0.886-0.343,1.517-1.193,1.517-2.186c0-1.296-1.076-2.323-2.396-2.323S7.604,5.037,7.604,6.333c0,0.993,0.63,1.843,1.517,2.186l-4.818,8.439c-0.189,0.311,0.038,0.708,0.412,0.708h10.558C15.645,17.667,15.871,17.27,15.684,16.959 M8.562,6.333c0-0.778,0.645-1.382,1.438-1.382s1.438,0.604,1.438,1.382c0,0.779-0.645,1.412-1.438,1.412S8.562,7.113,8.562,6.333 M5.55,16.726L10,8.91l4.435,7.815H5.55z M15.285,9.62c1.26-2.046,1.26-4.525,0-6.572c-0.138-0.223-0.064-0.512,0.162-0.646c0.227-0.134,0.521-0.063,0.658,0.16c1.443,2.346,1.443,5.2,0,7.546c-0.236,0.382-0.641,0.17-0.658,0.159C15.221,10.131,15.147,9.842,15.285,9.62 M13.395,8.008c0.475-1.063,0.475-2.286,0-3.349c-0.106-0.238,0.004-0.515,0.246-0.62c0.242-0.104,0.525,0.004,0.632,0.242c0.583,1.305,0.583,2.801,0,4.106c-0.214,0.479-0.747,0.192-0.632,0.242C13.398,8.523,13.288,8.247,13.395,8.008 M3.895,10.107c-1.444-2.346-1.444-5.2,0-7.546c0.137-0.223,0.431-0.294,0.658-0.16c0.226,0.135,0.299,0.424,0.162,0.646c-1.26,2.047-1.26,4.525,0,6.572c0.137,0.223,0.064,0.512-0.162,0.646C4.535,10.277,4.131,10.489,3.895,10.107 M5.728,8.387c-0.583-1.305-0.583-2.801,0-4.106c0.106-0.238,0.39-0.346,0.631-0.242c0.242,0.105,0.353,0.382,0.247,0.62c-0.475,1.063-0.475,2.286,0,3.349c0.106,0.238-0.004,0.515-0.247,0.62c-0.062,0.027-0.128,0.04-0.192,0.04C5.982,8.668,5.807,8.563,5.728,8.387"></path>
            </svg>
            <h5 className="text-xl font-semibold text-gray-900 ml-2 mt-1">In a nutshell</h5>
          </div>
          <p>
            - New applications are often sources of security threats which in turn call for security enhancement.
          </p>
          <p>
            - Supporting a legacy protocol in a new protocol deployment could expose old vulnerabilities
          </p>
          <p>
            - Fewer changes on protocol designs but more changes on protocol implementations are good to introduce fewer new vulnerabilities, but fixing more existing vulnerabilities faster.
          </p>
          <p>
            - Mutual authentication and ent-to-end encryption are still a challenge and the subject to demand a breakthrough.
          </p>
        </div>
        {/* <div className='flex justify-center aspect-auto react-players'>
          <ReactPlayer url='https://youtu.be/h6XSOzhqS5k' />
        </div> */}

        <h2 className= "text-2xl mx-2 mb-2" id="second-sub2">Deployment</h2>
        <p>
          We also learn from the past, that the deployments of new networks may have an impact on security. There are two kinds of deployments: 	
          Standalone (SA): the base stations of a new standard are directly connected to the core network without an intermediate carry of the old infrastructure.
          Non-Standalone (NSA): it has two benefits: much lower cost, and reusing existing facilities.
        </p>

        {/* <img src={} /> */}

        <h2 className= "text-2xl mx-2 mb-2" id="second-sub3">Deployment</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          suscipit nesciunt iste omnis nam ullam officiis mollitia doloremque
          fuga, quisquam eligendi laborum, voluptate cupiditate minima alias
          perspiciatis corrupti. Magni, ipsam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          suscipit nesciunt iste omnis nam ullam officiis mollitia doloremque
          fuga, quisquam eligendi laborum, voluptate cupiditate minima alias
          perspiciatis corrupti. Magni, ipsam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          suscipit nesciunt iste omnis nam ullam officiis mollitia doloremque
          fuga, quisquam eligendi laborum, voluptate cupiditate minima alias
          perspiciatis corrupti. Magni, ipsam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          suscipit nesciunt iste omnis nam ullam officiis mollitia doloremque
          fuga, quisquam eligendi laborum, voluptate cupiditate minima alias
          perspiciatis corrupti. Magni, ipsam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          suscipit nesciunt iste omnis nam ullam officiis mollitia doloremque
          fuga, quisquam eligendi laborum, voluptate cupiditate minima alias
          perspiciatis corrupti. Magni, ipsam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          suscipit nesciunt iste omnis nam ullam officiis mollitia doloremque
          fuga, quisquam eligendi laborum, voluptate cupiditate minima alias
          perspiciatis corrupti. Magni, ipsam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          suscipit nesciunt iste omnis nam ullam officiis mollitia doloremque
          fuga, quisquam eligendi laborum, voluptate cupiditate minima alias
          perspiciatis corrupti. Magni, ipsam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          suscipit nesciunt iste omnis nam ullam officiis mollitia doloremque
          fuga, quisquam eligendi laborum, voluptate cupiditate minima alias
          perspiciatis corrupti. Magni, ipsam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          suscipit nesciunt iste omnis nam ullam officiis mollitia doloremque
          fuga, quisquam eligendi laborum, voluptate cupiditate minima alias
          perspiciatis corrupti. Magni, ipsam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          suscipit nesciunt iste omnis nam ullam officiis mollitia doloremque
          fuga, quisquam eligendi laborum, voluptate cupiditate minima alias
          perspiciatis corrupti. Magni, ipsam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          suscipit nesciunt iste omnis nam ullam officiis mollitia doloremque
          fuga, quisquam eligendi laborum, voluptate cupiditate minima alias
          perspiciatis corrupti. Magni, ipsam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          suscipit nesciunt iste omnis nam ullam officiis mollitia doloremque
          fuga, quisquam eligendi laborum, voluptate cupiditate minima alias
          perspiciatis corrupti. Magni, ipsam.
        </p>
      </div>
    </div>
  );
};

export default Article;