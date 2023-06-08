import React from 'react';
import ReactPlayer from 'react-player';



const Article = () => {

  return (
    <div className='text-justify'>
      <h1 className="my-2 text-4xl text-gradient mb-6">Security and Privacy for 6G</h1>





      <div>
        <h2 className="text-3xl mb-6" id="first">What is 6G ?</h2>
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

        <img src="/images/Network_Security.png" alt="TEST" />



        <h2 className="text-3xl mb-4 mt-10" id="second">Security issues in 6G </h2>
        <h3 className="text-2xl mx-2 mb-2" id="second-sub1">Evolution of architecture</h3>
        <h4 className="text-xl mx-6 mb-2" id="second-subsub1">1G (1980s-1990s)</h4>
        <p className='mb-4'>
          There was no security and privacy.
        </p>
        <h4 className="text-xl mx-4 mb-2" id="second-subsub2">2G-3G</h4>
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

        <h2 className="text-2xl mx-2 mb-2" id="second-sub2">Deployment</h2>
        <p>
          We also learn from the past, that the deployments of new networks may have an impact on security. There are two kinds of deployments:
          Standalone (SA): the base stations of a new standard are directly connected to the core network without an intermediate carry of the old infrastructure.
          Non-Standalone (NSA): it has two benefits: much lower cost, and reusing existing facilities.
        </p>


        <h2 className="text-3xl mb-4 mt-10" id="third">Security in the connection layer</h2>
        <p>
          The connection layer could be seen as the aggregation of the network layer and the transport layer. This layer has been the target of attackers, as it goes from the ground stations to the gateways. Denial-of-service, spoofing attacks… the list goes on. Thus, it is more than essential to find ways to secure this layer as much as possible.
        </p>
        <h2 className="text-xl mx-2 mb-2 mt-6" id="">Network access control</h2>
        <p>
          The first method to secure the connection layer is with the 6G AKA, which stands for “6th Generation Authentication and Key Agreement”. However, to this day, as many of the 6G components are not yet standardized, 6G AKA is not clearly shaped and outlined. Still, these are the main points to underline:<br />
        </p>
        <p className='mt-4'>
          - Building a stronger authentication between the serving network (SN) and the subscribers. It is needed to prevent vulnerabilities. For example, there is a risk that a hacker could link a session key to the wrong user, which could allow them to transfer their network bill to someone else. This vulnerability can be prevented by using a stronger authentication protocol like 6G AKA, which will ensure that the correct session key is linked to the correct user. <br />
        </p>
        <p className='mt-4'>
          - It is important to ensure that all mobile network operators have strong security capabilities, especially in a 6G network where there may be many different operators with varying levels of security: 5G and 6G are extremely heterogeneous in this case. Some smaller operators may not have a strong infrastructure, hence why it is easier for attackers to target these ones. A “dual authentication” system that supports both old and new subscribers can also make security protection more difficult. To address these issues, efficient and secure authentication protocols that work across all operators, including those with weaker security, should be implemented. Additionally, non 3GPP authentication protocols with quantum-resistant algorithms can be used to ensure security in 6G networks that use open interfaces. <br />
        </p>
        <p className='mt-4'>
          - Attacks similar to IMSI catching can occur for home networks. There is actually a risk of privacy invasion of a fake home network injector, which can track users. To address this issue, the home network’s authentication server (AUSF) can publish its certificate to registered mobile devices and encrypt the device’s unique identifier (SUPI) to prevent it from being identified by the serving network. However, implementing this solution requires determining who are trusted partners and accommodating lawful interceptions for crime investigations. If a new identity model (e.g. non-ID) is introduced in the future, there is a need for a change on how identifier information is attached in authentication requests.
        </p>

        <h2 className="text-xl mx-2 mb-2 mt-6" id="second-sub2">Quantum-safe algorithms and quantum communication for secure communication</h2>
        <p>
          To keep communications secure in cellular networks, preventing unauthorized people from accessing them is thus critical. Cryptography is used to protect user data, but with the advancement of quantum computing, current public-key cryptography methods are vulnerable to attack: quantum computers have the ability to break any cryptosystem. Key-based techniques for data encryption such as RSA (Rivest-Shamir-Adleman) or ECC (Elliptic Curve Cryptography) have found to be vulnerable to quantum attacks.<br />
        </p>
        <p className='mt-4'>
          To address this, there are two approaches: enhancing current methods to resist quantum attacks, and developing post-quantum algorithms. The most feasible plan is to gradually transition to a quantum-safe cryptographic model like quantum key distribution (QKD) as it becomes more available and cost-effective. Researchers are also exploring hybrid key exchange mechanisms to enhance security. In the meantime, existing ciphersuites will continue to be used, with QKD and quantum resistant algorithms being implemented in more sensitive applications.
        </p>
        <div className="mb-6 border mt-4 border-gray-300 p-4 rounded-lg shadow hover:bg-blue-100">
          <div className="flex mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-8 h-8 bi bi-question-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
            </svg>
            <h5 className="text-xl font-semibold text-gray-900 ml-2 mt-1">What are the remaining challenges</h5>
          </div>
          <p>
            6G communication networks will face challenges in ensuring security while keeping costs and energy consumption low. Implementing end-to-end encryption for all data transmission may be too expensive and time consuming for 6G: current standardization bodies prefer optional use of security measures based on the service requirements. It is unclear how to meet the requirement for mandatory end-to-end encryption as many factors have to be taken into account, and upgrading all security protocols to support quantum safe standards will take a long time. Additionally, increasing the key size or data amount for processing can lead to high energy consumption and storage size. Due to these constraints, many IoT networks may not quickly adopt end-to-end encryption or quantum-resistant algorithms. Operators may prioritize cost and time-to-market over security, at the expense of some mandatory security features.
          </p>
        </div>

        <h2 className="text-xl mx-2 mb-2 mt-6" id="">Roaming security</h2>
        <p>
          In the 5G security architecture, the Seurity Edge Protection Proxy (SEPP) is responsible for protecting the connections between the user’s home network and other networks. It uses authentication, encryption, and signatures to protect data as it moves between networks. If there are no IP exchange (IPX) entities, TLS protocols are used for protection, while an application layer security protocol called PRINS is used if IPX entities are present. The SEPP uses JSON web encryption to protect messages against eavesdropping and replay attacks. In 6G, these protocols may be improved to support stronger encryption or faster data transmission on high-speed networks.
        </p>
      </div>
      <div className="mb-6 border mt-4 border-gray-300 p-4 rounded-lg shadow hover:bg-blue-100">
        <div className="flex mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-8 h-8 bi bi-question-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
          </svg>
          <h5 className="text-xl font-semibold text-gray-900 ml-2 mt-1">What are the remaining challenges</h5>
        </div>
        <p>
          As TLS is and will still be widely used in communications, identifying its vulnerabilities is key to maintaining security.
        </p>
      </div>

      <h2 className="text-xl mx-2 mb-2 mt-6" id="">6G trust networks, blockchain</h2>
      <p>
        A trust network is a group of interconnected devices that are restricted to authorized users and only allow secure data to be transmitted. Trust networks and services are important in 6G networks to ensure that interactions are consistent and reliable. This involves preventing fake or misbehaving sources and avoiding single points of failure. Cryptographic schemes like digital signatures and certificates can be used to establish trust, but blockchain and distributed ledger technologies may also be useful. These technologies can provide security and privacy features like transparency, data integrity, and authentication, and can be used for applications like energy and computing infrastructure sharing. The top expectations for blockchain and DLT (Distributed Ledger Technology)  in 6G are to enhance specific applications, improve the security of smart contracts and consensus protocols, and combine with AI for better analytics.
      </p>
      <div className="mb-6 border mt-4 border-gray-300 p-4 rounded-lg shadow hover:bg-blue-100">
        <div className="flex mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-8 h-8 bi bi-question-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
          </svg>
          <h5 className="text-xl font-semibold text-gray-900 ml-2 mt-1">What are the remaining challenges</h5>
        </div>
        <p>
          The Blockchain and Distributed Ledger Technology are still relatively new, as well as their development. Some questions on computation, communication resources and energy consumption have yet to be answered. Even though there are ways to manage some of these issues, there are still some security risks that need to be dealt with.
        </p>
      </div>

      <h2 className="text-xl mx-2 mb-2 mt-6" id="">SD-WAN security: 6G network management control</h2>
      <p>
        In the future, SDN (Software-Defined Networking) is expected to be used fully in 6G. There are two types of SDN called SD-WAN (Software-Defined Wide Area Network) and SD-LAN (Software-Defined Local Area Network). They improve network control and performances by separating the data and control places. To protect against these threats, there are various detection and mitigation methods, such as using abnormal intrusion detection systems and moving target defense. Machine learning and deep learning can also be used to enhance detection. Secure access service-edge (SASE) architecture can provide cloud-native security service for SD-WAN in mobile networks.
      </p>
      <div className="mb-6 border mt-4 border-gray-300 p-4 rounded-lg shadow hover:bg-blue-100">
        <div className="flex mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-8 h-8 bi bi-question-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
          </svg>
          <h5 className="text-xl font-semibold text-gray-900 ml-2 mt-1">What are the remaining challenges</h5>
        </div>
        <p>
          Here, once again, SD-WAN, like Blockchain and Distributed Ledger Technologies, is relatively new. Thus, some protection methods may or may not be compatible with SD-WAN. In addition, cloud security and SD-WAN security are likely to converge, but there is still some reviewing to do.
        </p>
      </div>

      <h2 className="text-xl mx-2 mb-2 mt-6" id="">Deep slicing and Open RAN for 6G network security isolation</h2>
      <p>

        Open RAN stands for Open Radio Access Network, and it is a new approach of wireless communication: it provides a technology that connects users over radio waves.
        Network slicing is a way of dividing a network into smaller sections that are isolated from each other, and in 6G, it will be used more and more. It can help improve security by preventing privacy and security issues from one slice to spread to the others. Each slice has specific performance targets, and there is no communication between the slices, except through their interfaces. Overall, network slicing can help making 6G a more secure network.
      </p>
      <div className="mb-6 border mt-4 border-gray-300 p-4 rounded-lg shadow hover:bg-blue-100">
        <div className="flex mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-8 h-8 bi bi-question-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
          </svg>
          <h5 className="text-xl font-semibold text-gray-900 ml-2 mt-1">What are the remaining challenges</h5>
        </div>
        <p>
          The main challenge in creating secure network slicing is to ensure each slice meets its performance requirements, while enforcing security policies. A network slice manager is responsible for managing the virtual networks within its domain. A large-scale DoS attack could potentially disrupt the entire network. There are ways to protect against these attacks, but implementing them in real-life is another challenge, due to the strict requirements in terms of response and processing time.
        </p>
      </div>

      <h2 className="text-xl mx-2 mb-2 mt-6" id="">Virtualized RAN, Cloud-RAN, and Open RAN</h2>
      <p>
        Virtualized Radio Access Network (vRAN) and Open RAN are new technologies that can improve security in 6G. vRAN is similar to traditional RAN, but it is virtualized on commodity servers, and not on physical parts. vRAN and Open RAN offer improved modularity and reduced inter-dependencies, which is a huge asset for improving security. By reducing dependencies on unique software, operators can also select the best vendors out here that will meet their security requirements, avoiding massive outages caused by expired software certificates, which is what happened in 2018 for O2 and Softbank. By depending on one vendor, the risks of service interruption is tremendous.
      </p>
      <div className="mb-6 border mt-4 border-gray-300 p-4 rounded-lg shadow hover:bg-blue-100">
        <div className="flex mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-8 h-8 bi bi-question-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
          </svg>
          <h5 className="text-xl font-semibold text-gray-900 ml-2 mt-1">What are the remaining challenges</h5>
        </div>
        <p>
          The main disadvantages of vRAN lay in the management of the physical signal spectrum. It demands better processing because of the computational power needed, and better care for processors, as they are subject to overheating.
          The Open RAN model and software-driven RAN approaches are not perfect: they have some downsides. For one, sharing open-source code is meant to help developers receive useful feedback from the community. Nonetheless, if the code is not written or reviewed by security experts, it could be vulnerable, with or without reverse-engineering. Additionally, if vulnerable source code is reused as a library to develop other codes, it can lead to the propagation of vulnerabilities.
        </p>
      </div>

      <h2 className="text-xl mx-2 mb-2 mt-6" id="">Next-generation firewalls/intrusion detection for 6G network endpoint and multi-access edge security</h2>
      <p>
        Endpoints are at the cornerstone of the core network: perimeter routers, IP core network gateways… In traditional core networks, security gateways are necessary to protect against external threats.  These gateways go through the traffic which comes from both directions, and they ensure that it complies with operational policies, to prevent unauthorized traffic. Security gateways can take many forms: network firewalls, intrusion detection systems, antivirus software… As 6G systems are developed, these security gateways will require significant upgrades to their capabilities. And to achieve them, AI driven engines will need to be upgraded to handle more complex and diverse networks.
      </p>
      <div className="mb-6 border mt-4 border-gray-300 p-4 rounded-lg shadow hover:bg-yellow-100">
        <div className="flex mb-2">
          <svg className="w-8 h-8" viewBox="0 0 20 20">
            <path d="M15.684,16.959L10.879,8.52c0.886-0.343,1.517-1.193,1.517-2.186c0-1.296-1.076-2.323-2.396-2.323S7.604,5.037,7.604,6.333c0,0.993,0.63,1.843,1.517,2.186l-4.818,8.439c-0.189,0.311,0.038,0.708,0.412,0.708h10.558C15.645,17.667,15.871,17.27,15.684,16.959 M8.562,6.333c0-0.778,0.645-1.382,1.438-1.382s1.438,0.604,1.438,1.382c0,0.779-0.645,1.412-1.438,1.412S8.562,7.113,8.562,6.333 M5.55,16.726L10,8.91l4.435,7.815H5.55z M15.285,9.62c1.26-2.046,1.26-4.525,0-6.572c-0.138-0.223-0.064-0.512,0.162-0.646c0.227-0.134,0.521-0.063,0.658,0.16c1.443,2.346,1.443,5.2,0,7.546c-0.236,0.382-0.641,0.17-0.658,0.159C15.221,10.131,15.147,9.842,15.285,9.62 M13.395,8.008c0.475-1.063,0.475-2.286,0-3.349c-0.106-0.238,0.004-0.515,0.246-0.62c0.242-0.104,0.525,0.004,0.632,0.242c0.583,1.305,0.583,2.801,0,4.106c-0.214,0.479-0.747,0.192-0.632,0.242C13.398,8.523,13.288,8.247,13.395,8.008 M3.895,10.107c-1.444-2.346-1.444-5.2,0-7.546c0.137-0.223,0.431-0.294,0.658-0.16c0.226,0.135,0.299,0.424,0.162,0.646c-1.26,2.047-1.26,4.525,0,6.572c0.137,0.223,0.064,0.512-0.162,0.646C4.535,10.277,4.131,10.489,3.895,10.107 M5.728,8.387c-0.583-1.305-0.583-2.801,0-4.106c0.106-0.238,0.39-0.346,0.631-0.242c0.242,0.105,0.353,0.382,0.247,0.62c-0.475,1.063-0.475,2.286,0,3.349c0.106,0.238-0.004,0.515-0.247,0.62c-0.062,0.027-0.128,0.04-0.192,0.04C5.982,8.668,5.807,8.563,5.728,8.387"></path>
          </svg>
          <h5 className="text-xl font-semibold text-gray-900 ml-2 mt-1">Summary of lessons learned from connection layer security</h5>
        </div>
        <p>
          Potential solutions for securing the connection layer of 6G networks were discussed, such as quantum-safe algorithms, blockchain and deep slicing. However, quantum-safe cryptographic schemes are still being developed and it will take time to transition to them from existing non-quantum safe algorithms. Distributed ledger and blockchain could revolutionize 6G, but their energy consumption must be addressed. While traditional security technologies like firewalls and intrusion detection systems will still be important in 6G, they need to be upgraded to handle the complex environment of multiple connection technologies. One potential solution is to incorporate AI into their detection engines, although this approach has its own challenges. Overall, securing the connection layer of 6G will require a combination of existing and emerging technologies.
        </p>
      </div>



      <h2 className="text-3xl mb-4 mt-10" id="fourth">Security in the service layer</h2>
      <p>
        Nowadays, the service layer mainly consists of edge/fox/cloud technologies, which are different computing paradigms. In order to protect the service layer, it is needed to combine different tasks, such as authentication, firewalls, data encryption, service identity access management, data-center network protection, and many more. There are many potential technologies which could help mitigate risks.
      </p>

      <h2 className="text-xl mx-2 mb-2 mt-6" id="">6G application authentication: distributed PKI and blockchain-based PKI</h2>
      <p>
        If the concept of Public Key Cryptography doesn’t ring a bell, here is a video explaining the basic of it.<br />
        <div className="mt-4 mb-4">
          <ReactPlayer url='https://www.youtube.com/watch?v=GSIDS_lvRv4' />
        </div>
        PKI (Public Key Infrastucture) is a system which provides an authentication method both for the user and for the software. There are two models for PKIs: the centralized one and the decentralized one. In the centralized PKI, it relies on a single authority for issuing the certificate and managing it. However, it represents a single point of failure: if the certificate authority is compromised, it can lead to significant security risks and breaches. One improvement that could be made would be to decentralize the PKI system, by using a blockchain-based PKI. In this way, the Certication Authorities (CAs) will be way more reliable, especially for future 6G applications. Another important point with the blockchain-based PKI is the transparency: everyone knows who did what, and when.<br />
        However, the problem with blockchain-based technologies is the computational power as well as the energy needed to run. As the processes of validating each action in the blockchain requires a consensus of each block, the complexity of the algorithms make it energy-intensive. Also, the blockchain is not completely protected of attacks, such as <strong>51% attacks</strong>, for instance.
      </p>

      <h2 className="text-xl mx-2 mb-2 mt-6" id="">Using service access authentication (6G AKA) for application authentication</h2>
      <p>
        Pre-shared keys, problem: before, the credentials were used. In prior generations, when a user wanted to access an application, usernames, passwords, tokens, or certificates were typically used to prove their identity to the application server. However, the huge amount of credentials can be challenging to manage and can potentially increases the risk of data breaches.

        This is where AKMA comes into play. AKMA, which stands for Authentication and Key Management for Applications, is a technology introduced in 5G networks to handle authentication and key management for accessing applications. It allows users to authenticate themselves when accessing applications without the need for additional usernames, passwords, tokens, or certificates. It simplifies the authentication process by utilizing the pre-existing cellular authentication mechanisms. This approach brings convenience and reduces the complexity of building new authentication systems, especially for small application provider.
      </p>
      <p className="mt-4">
        We expect that in 6G networks, AKMA will be further improved to reduce delays in applications like virtual and augmented reality.
      </p>
      <p className="mt-4">
        Notwithstanding, AKMA is still relatively new in its implementation stage, and requires a close relationship between network operators and application providers, which is quite difficult with OAuth or SSO schemes.
      </p>

      <h2 className="text-xl mx-2 mb-2 mt-6" id="">6G biometric authentication for 6G-enabled IoT and implantable devices </h2>
      <p>
        New authentication methods such as biometric and behavioural methods have taken the lead for the past couple of years, such as fingerprints or facial features.. As there is no combination to memorize (username/password), it simplifies the life of users, especially those with disabilities. In the context of 6G, biometric authentication can also be used for access control in the core networks.
      </p>
      <p className="mt-4">
        When 6G will introduce Terahertz (THz) imaging technology, it will greatly enhance the security of biometrics. THz imaging can identify superficial skin traits or faces, distinguishing real fingers from artificial ones. Combining different biometric traits, such as fingerprints and facial features, can provide higher accuracy and flexibility.
      </p>
      <p className="mt-4">
        Newer biometric methods based on brain signals (electroencephalogram) and heart signals (electrocardiogram) have also emerged. It is now possible to identify people from a distance by analyzing their heartbeat, up to 200 meters away. Brain and heart signals are unique to individuals and cannot be modified.. These technologies offer more resistance to fraud compared to traditional methods like fingerprints or passwords.
      </p>
      <p className="mt-4">
        On the other hand, the problem of personal data leakage remains, leaving room for potential privacy breaches. Once a breach of confidentiality has occurred for biometric data, there is no turning back, it is not possible to “update” fingerprints. Also, it puts the owner at risk, as his or her information can be stolen (find an example in the press).
      </p>
      <img src="images/SecuServiceLayer-1.png"/>
      <p className='mt-4'>
        Other methods to secure the service layer have been recently developed or considered:
      </p>
      <p className='mt-4'>
        - <strong>OAuth 3.0</strong>, an authorization protocol that allows users to grant limited access to their resources to other applications without sharing their credentials. It enables secure authentication and authorization between systems by issuing access tokens to authorized applications, but is still at a concept level.
      </p>
      <p className='mt-4'>
        - <strong>Enhanced HTTP/3 over QUIC for secure data exchange in 6G low-latency applications</strong>, an HTTP/3, an enhanced version of HTTP, built on Quick UDP Internet Connection, is used for secure data exchanges, and which solves the "head-of-line blocking" issue of HTTP/2 and offers per-object error and congestion control. With its faster and more reliable transmission capabilities, HTTP/3 is expected to be advantageous for low-latency applications in 5G/6G networks. However, the transition to UDP may pose security challenges and require further research on potential attacks and defense techniques.
      </p>
      <p className='mt-4'>
        - <strong>Quantum homomorphic encryption for secure computation</strong>: secure computation in computing nodes like edge servers is crucial for confidentiality and integrity. Different encryption methods, such as identity-based encryption, attribute-based encryption, and homomorphic encryption, are used for protecting storage information. Homomorphic encryption, which allows algebraic operations on ciphertext without decryption, holds promise for privacy preservation in centralized computing nodes, particularly in the 6G era with increased data outsourcing to edge servers. However, challenges remain in enforcing strong encryption standards across all service providers and achieving efficient encrypted data operations while maintaining security. Transitioning to quantum-safe encryption is also important to prevent adversaries from exploiting quantum computing power.
      </p>
      <p className='mt-4'>
        <strong>Liquid software security</strong>: liquid software allows data and applications to flow between nodes, and in 6G, this platform-agnostic approach will be extended to computing nodes such as edge servers. Enhancing containerization architecture and cloudization of edge/fog nodes will facilitate the development of platform-agnostic systems (which are systems designed to be independent any specific operating system or hardware platform). However, security challenges arise, including potential attacks in multi-tenancy container-based systems and the need for research on platform-agnostic security and related attacks. In the context of the evolving "Service Everywhere" architecture, security-as-a-service models will expand to computing nodes, and proactive AI models will be upgraded to address multiple threats. Challenges remain in detecting insider attacks and implementing robust distributed backup facilities to mitigate risks.
      </p>
      <p></p>
      <img src="images/SecuServiceLayer-2.png"/>
    </div >
  );
};

export default Article;