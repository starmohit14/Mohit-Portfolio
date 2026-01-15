import React from 'react';
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaRegFileExcel,
  FaWordpress,
  FaGoogle,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiMongodb,
  SiElementor,
  SiSemrush,
  SiYoast,
  SiWordpress as SiWordpressAlt,
  SiShopify,
  SiWix,
  SiSquarespace
} from 'react-icons/si';

import { TbSeo } from "react-icons/tb";

import SigmaLogo from "../../assets/webxplore.png";
import WebLogo from "../../assets/webxplore.png";

const Experience = () => {
  return (
    <div id='Experience' className='p-6 md:p-24 text-white bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]'>
      <div className="max-w-7xl mx-auto bg-black bg-opacity-40 rounded-3xl p-6 md:p-10 shadow-2xl">

        <h1 className='text-3xl md:text-5xl font-bold text-center mb-14 tracking-wide text-blue-400'>
          Experience
        </h1>

        {/* Experience Card 1 */}
        <div className='flex flex-col md:flex-row justify-between items-start gap-10 mb-16 bg-gradient-to-r from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-blue-600 shadow-lg transition hover:shadow-[0_0_30px_#3b82f6]'>
          <div className='w-full md:w-1/2 flex gap-5 items-start text-center md:text-left'>
            <img src={SigmaLogo} alt="SDS" className='w-16 h-16 rounded-md object-cover shadow-md' />
            <div>
              <h2 className='text-xl font-bold'>WordPress Developer</h2>
              <h3 className='text-base font-medium text-gray-300'>Webxplore Technologies | Ghaziabad (Remote)</h3>
              <p className='text-sm text-gray-400 mt-1'>Aug 2024 – Present</p>
              <ul className='list-disc pl-5 text-sm mt-3 space-y-1 text-gray-300 text-left'>
                <li>Proficient in HTML, CSS, JavaScript, Bootstrap, and WordPress for crafting dynamic, user-friendly interfaces aligned with modern design principles.</li>
                <li>Developed and launched dynamic web platforms for clients like The Noble Group and SigmaCrew, leveraging WordPress and Bootstrap for rapid, responsive deployment.</li>
                <li>Built responsive UI components that enhanced service visibility and mobile engagement across devices.</li>
                <li>Increased user satisfaction by 35% by improving accessibility, performance, and overall UX across web solutions.</li>
              </ul>
            </div>
          </div>
          <div className='w-full md:w-1/2 flex flex-wrap gap-4 justify-center md:justify-center mt-6 md:mt-0'>
            {[
              { icon: <FaHtml5 color='orangered' /> },
              { icon: <FaCss3 color='#264de4' /> },
              { icon: <FaBootstrap color='#264de4' /> },
              { icon: <FaJs color='#f0db4f' /> },
              { icon: <FaWordpress color='#21759B' /> },
              { icon: <SiElementor color='#92003B' /> },
            ].map((tech, index) => (
              <span key={index} className='p-4 bg-zinc-900 rounded-2xl shadow-lg'>
                {React.cloneElement(tech.icon, { size: 40 })}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Card 2 */}
        <div className='flex flex-col md:flex-row justify-between items-start gap-10 mb-16 bg-gradient-to-r from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-purple-500 shadow-lg transition hover:shadow-[0_0_30px_#8b5cf6]'>
          <div className='w-full md:w-1/2 flex gap-5 items-start text-center md:text-left'>
            <img src={WebLogo} alt="Google" className='w-16 h-16 rounded-md object-cover shadow-md' />
            <div>
              <h2 className='text-xl font-bold'>WordPress Developer Intern</h2>
              <h3 className='text-base font-medium text-gray-300'>Webxplore Technologies | Ghaziabad (Remote)</h3>
              <p className='text-sm text-gray-400 mt-1'>May 2024 – July 2024</p>
              <ul className='list-disc pl-5 text-sm mt-3 space-y-1 text-gray-300 text-left'>
                <li>Assisted in updating and customizing WordPress websites using Elementor and theme builders.</li>
                <li>Supported integration of WooCommerce features like product pages and payment gateways for small business sites.</li>
                <li>Helped implement basic performance enhancements including image optimization and plugin-based caching.</li>
                <li>Worked closely with the SEO team to apply meta tags, alt texts, and basic schema using SEO plugins like Yoast.</li>
              </ul>
            </div>
          </div>
          <div className='w-full md:w-1/2 flex flex-wrap gap-4 justify-center md:justify-center mt-6 md:mt-0'>
            {[
              { icon: <FaHtml5 color='orangered' /> },
              { icon: <FaCss3 color='#264de4' /> },
              { icon: <FaBootstrap color='#264de4' /> },
              { icon: <FaJs color='#f0db4f' /> },
              { icon: <FaWordpress color='#21759B' /> },
              { icon: <SiElementor color='#92003B' /> },
            ].map((tech, index) => (
              <span key={index} className='p-4 bg-zinc-900 rounded-2xl shadow-lg'>
                {React.cloneElement(tech.icon, { size: 40 })}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Card 3 - SEO Executive */}
        <div className='flex flex-col md:flex-row justify-between items-start gap-10 bg-gradient-to-r from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-blue-600 shadow-lg transition hover:shadow-[0_0_30px_#3b82f6]'>
          <div className='w-full md:w-1/2 flex gap-5 items-start text-center md:text-left'>
            <img src={WebLogo} alt="SDS" className='w-16 h-16 rounded-md object-cover shadow-md' />
            <div>
              <h2 className='text-xl font-bold'>SEO Executive</h2>
              <h3 className='text-base font-medium text-gray-300'>Webxplore Technologies Pvt. Ltd. | Ghaziabad (Remote & Onsite)</h3>
              <p className='text-sm text-gray-400 mt-1'>Jan 2021 – April 2024</p>
              <ul className='list-disc pl-5 text-sm mt-3 space-y-1 text-gray-300 text-left'>
                <li>Enhanced organic traffic by 70% through strategic SEO initiatives, including keyword optimization and implementation of structured data (Schema.org).</li>
                <li>Partnered with development teams to build and launch SEO-optimized, high-performing websites, ensuring technical SEO best practices were integrated from the ground up.</li>
              </ul>
            </div>
          </div>
          <div className='w-full md:w-1/2 flex flex-wrap gap-4 justify-center md:justify-center mt-6 md:mt-0'>
            {[
              { icon: <SiGooglesearchconsole color="#4285F4" /> },
              { icon: <SiGoogleanalytics color="#FF9900" /> },
              { icon: <SiSemrush color="#FF5722" /> },
              { icon: <SiYoast color="#A4286A" /> },
              { icon: <TbSeo color="#0C66FF" /> },
              { icon: <FaGoogle color="#34A853" /> },
              { icon: <SiWordpressAlt color="#21759B" /> },
              { icon: <SiShopify color="#95BF47" /> },
              { icon: <SiWix color="#FAAD4D" /> },
              { icon: <SiSquarespace color="#000000" /> }
            ].map((tech, index) => (
              <span key={index} className='p-4 bg-zinc-900 rounded-2xl shadow-lg'>
                {React.cloneElement(tech.icon, { size: 40 })}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
