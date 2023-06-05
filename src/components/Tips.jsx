import React from 'react'
import ReactPlayer from 'react-player';

function Tips() {
    return (
        <div className='mt-10'>
            <h1 className='text-3xl text-center text-gradient'>Tips & Ressources</h1>


{/* LABS */}            
            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-blue-600">Labs</span>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>


    

            <div className='flex flex-wrap m-0 p-0 gap-2 justify-center items-center '>

                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow" style={{ maxHeight: '28rem', overflowY: 'auto' }} >
                    <div className='sticky top-0 bg-white z-10'>
                        <div className='flex justify-between'>
                            <svg className="w-10 h-10 mb-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1c0-.21-.07-.41-.18-.57L13 8.35V4h-2v4.35L5.18 18.43c-.11.16-.18.36-.18.57m1 3a3 3 0 0 1-3-3c0-.6.18-1.16.5-1.63L9 7.81V6a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1v1.81l5.5 9.56c.32.47.5 1.03.5 1.63a3 3 0 0 1-3 3H6Z" /></svg>

                            <img src='/images/THMlogo.png' alt='THM logo' className="w-30 h-20" />
                        </div>
                        <a href="https://tryhackme.com/">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Try Hack Me</h5>
                        </a>
                    </div>
                    <p className="mb-3 font-normal text-gray-500" >
                        -<strong>Price</strong>: Free for the first lessons of each classes, then you can subscribe for the premium membership and have access to all the VMs, the labs, and many more, for about $12 per month. <br />

                        -<strong>Features</strong>: TryHackMe has a wide range of cybersecurity labs and challenges covering various topics such as web penetration testing, network analysis, digital forensics, and more. They provide a user-friendly interface and supports learning paths. 
                    </p>
                    <a href="https://tryhackme.com/" className="inline-flex items-center text-blue-600 hover:underline">
                        Discover
                        <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                    </a>
                </div>


                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow" style={{ maxHeight: '28rem', overflowY: 'auto' }}>
                    <div className='sticky top-0 bg-white z-10'>
                        <div className='flex justify-between'>
                            <svg className="w-10 h-10 mb-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1c0-.21-.07-.41-.18-.57L13 8.35V4h-2v4.35L5.18 18.43c-.11.16-.18.36-.18.57m1 3a3 3 0 0 1-3-3c0-.6.18-1.16.5-1.63L9 7.81V6a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1v1.81l5.5 9.56c.32.47.5 1.03.5 1.63a3 3 0 0 1-3 3H6Z" /></svg>

                            <img src='/images/HTBlogo.png' alt='HTB logo' className="w-30 h-20" />
                        </div>
                        <a href="https://www.hackthebox.com/">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Hack The Box</h5>
                        </a>
                    </div>
                    <p className="mb-3 font-normal text-gray-500">
                        -<strong>Price</strong>: Most paths are free, there is a VIP subscription available for additional features, at $12/month <br />
                        -<strong>Features</strong>: HackTheBox provides a platform with virtual machines (VMs) that simulate real-world scenarios for users to solve. They also offer both active and retired machines with varying difficulty levels. Users can practice different aspects of penetration testing and exploit development. The community and the discussion forums are active, and many are happy to help or to collaborate.

                    </p>
                    <a href="https://www.hackthebox.com/" className="inline-flex items-center text-blue-600 hover:underline">
                        Discover
                        <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                    </a>
                </div>


                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow" style={{ maxHeight: '28rem', overflowY: 'auto' }}>
                    <div className='sticky top-0 bg-white z-10'>
                        <div className='flex justify-between'>
                            <svg className="w-10 h-10 mb-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1c0-.21-.07-.41-.18-.57L13 8.35V4h-2v4.35L5.18 18.43c-.11.16-.18.36-.18.57m1 3a3 3 0 0 1-3-3c0-.6.18-1.16.5-1.63L9 7.81V6a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1v1.81l5.5 9.56c.32.47.5 1.03.5 1.63a3 3 0 0 1-3 3H6Z" /></svg>

                            <img src='/images/PLlogo.png' alt='PL logo' className="w-30 h-20" />
                        </div>
                        <a href="https://pentesterlab.com/">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">PentesterLab</h5>
                        </a>
                    </div>

                    <p className="mb-3 font-normal text-gray-500">
                        -<strong>Price</strong>: Subscription-based, starting at $19/month<br />
                        -<strong>Features</strong>: This website focuses more on web application security and offers hands-on labs and exercises. It covers topics such as SQL injection, XSS (Cross-Site Scripting), file inclusion vulnerabilities, and more. They also provide a guided learning path for beginners and advanced users, with downloadable materials and exercises to practice offline.


                    </p>
                    <a href="https://pentesterlab.com/" className="inline-flex items-center text-blue-600 hover:underline">
                        Discover
                        <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                    </a>
                </div>


                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow" style={{ maxHeight: '28rem', overflowY: 'auto' }}>
                    <div className='sticky top-0 bg-white z-10'>
                        <div className='flex justify-between'>
                            <svg className="w-10 h-10 mb-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1c0-.21-.07-.41-.18-.57L13 8.35V4h-2v4.35L5.18 18.43c-.11.16-.18.36-.18.57m1 3a3 3 0 0 1-3-3c0-.6.18-1.16.5-1.63L9 7.81V6a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1v1.81l5.5 9.56c.32.47.5 1.03.5 1.63a3 3 0 0 1-3 3H6Z" /></svg>

                            <img src='/images/VHLlogo.jpeg' alt='VHL logo' className="w-30 h-20" />
                        </div>
                        <a href="https://www.virtualhackinglabs.com/">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Virtual Hacking Lab</h5>
                        </a>
                    </div>

                    <p className="mb-3 font-normal text-gray-500">
                        -<strong>Price</strong>: Subscription-based, starting at €89/month<br />
                        -<strong>Features</strong>: Provides a virtual lab environment with multiple machines and networks to practice penetration testing techniques. Covers topics such as web application security, network security, and privilege escalation. Offers guided exercises and supports remote access to the lab environment.
                    </p>
                    <a href="https://www.virtualhackinglabs.com/" className="inline-flex items-center text-blue-600 hover:underline">
                        Discover
                        <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                    </a>
                </div>

                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow" style={{ maxHeight: '28rem', overflowY: 'auto' }}>
                    <div className='sticky top-0 bg-white z-10'>
                        <div className='flex justify-between'>
                            <svg className="w-10 h-10 mb-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1c0-.21-.07-.41-.18-.57L13 8.35V4h-2v4.35L5.18 18.43c-.11.16-.18.36-.18.57m1 3a3 3 0 0 1-3-3c0-.6.18-1.16.5-1.63L9 7.81V6a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1v1.81l5.5 9.56c.32.47.5 1.03.5 1.63a3 3 0 0 1-3 3H6Z" /></svg>

                            <img src='/images/eLSlogo.jpeg' alt='VHL logo' className="w-30 h-20" />
                        </div>
                        <a href="https://elearnsecurity.com/">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">eLearnSecurity</h5>
                        </a>
                    </div>

                    <p className="mb-3 font-normal text-gray-500">
                        -<strong>Price</strong>: Subscription-based, starting at €89/month<br />
                        -<strong>Features</strong>: Provides a virtual lab environment with multiple machines and networks to practice penetration testing techniques. Covers topics such as web application security, network security, and privilege escalation. Offers guided exercises and supports remote access to the lab environment.
                    </p>
                    <a href="https://elearnsecurity.com/" className="inline-flex items-center text-blue-600 hover:underline">
                        Discover
                        <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                    </a>
                </div>

            </div>

{/* YOUTUBE CHANNELS */}

            <div className="relative flex mt-8 py-5 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-blue-600">Youtube channels</span>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>


          {/* <div className='flex justify-center aspect-auto react-players'>
            <ReactPlayer url='https://youtu.be/h6XSOzhqS5k' />
        </div>  */}


        </div>
    )
}

export default Tips