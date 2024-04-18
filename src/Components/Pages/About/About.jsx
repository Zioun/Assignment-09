import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import { ScrollRestoration } from "react-router-dom";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
    AOS.refresh();
  }, []);
  return (
    <div className="container max-w-[1200px] m-auto my-20 px-5">
      <ScrollRestoration />
      <Helmet>
        <title>WSP_Residence-About</title>
      </Helmet>
      <div className="flex flex-col items-center gap-5">
        <div data-aos="zoom-in-down" className="text-center">
          <h1 className="font-semibold text-[#A62F03]">WHO WE ARE</h1>
          <h1 className="text-[40px]">About our company</h1>
          <p className="max-w-[700px] text-[16px] m-auto mb-10 mt-3 text-[#7A7A7A] font-normal">
            Utilizing our exceptional experience and knowledge of the luxury
            waterfront markets,we serve an extensive and elite worldwide client
            base.{" "}
          </p>
        </div>
        <div className="grid grid-cols-6 gap-10">
          <div data-aos="zoom-in-up" className="col-span-6 md:col-span-3">
            <h1 className="text-[20px] font-semibold">Our Mission</h1>
            <p className="mt-2 text-[#696969] max-w-full">
              Our mission is to serve as a catalyst for positive change,
              empowering individuals and communities to create a sustainable and
              equitable future. Through advocacy, education, and action, we
              strive to address pressing social, economic, and environmental
              challenges. We are committed to fostering collaboration and
              innovation to develop holistic solutions that improve lives and
              protect our planet. By engaging with stakeholders and leveraging
              our resources effectively, we aim to build resilient communities
              and promote a culture of compassion and inclusivity. Together, we
              work towards a world where everyone has the opportunity to thrive
              and flourish.
            </p>
          </div>
          <div data-aos="zoom-in-up" className="col-span-6 md:col-span-3">
            <h1 className="text-[20px] font-semibold">Our Vision</h1>
            <p className="mt-2 text-[#696969] max-w-full">
              Our Vision is to cultivate a global paradigm shift towards
              sustainable living, where communities thrive in harmony with
              nature and each other. We envision a world where every individual
              has access to resources and opportunities that empower them to
              reach their full potential. Through innovative solutions and
              collaborative efforts, we aspire to create a future where economic
              prosperity is balanced with environmental stewardship, and where
              social justice is the cornerstone of every decision. Our vision
              encompasses a diverse and inclusive society, where differences are
              celebrated and everyone is valued. Together, we strive to build a
              brighter tomorrow for generations to come.
            </p>
          </div>
          <div data-aos="zoom-in-up" className="col-span-6 md:col-span-3">
            <h1 className="text-[20px] font-semibold max-w-full">Our Values</h1>
            <p className="mt-2 text-[#696969]">
              Our values are the guiding principles that shape everything we do.
              Integrity is at our core, driving us to always act ethically and
              transparently. Compassion inspires us to empathize with others and
              act with kindness and empathy. Innovation fuels our creativity,
              pushing us to find new and better ways to address challenges.
              Collaboration is our strength, as we believe in the power of
              working together towards common goals. These values guide us in
              building a supportive and inclusive community where diversity is
              celebrated and everyone's contributions are valued. Together, we
              uphold these values as the foundation of our organization and our
              interactions with others.
            </p>
          </div>
          <div data-aos="zoom-in-up" className="col-span-6 md:col-span-3">
            <h1 className="text-[20px] font-semibold max-w-full">
              Our Resources
            </h1>
            <p className="mt-2 text-[#696969]">
            Our Resources encompass a spectrum of assets crucial for our mission's success. They range from committed personnel and volunteers to financial backing and technological infrastructure. With strategic allocation and prudent management, we optimize their utilization to achieve sustainable impact. By nurturing partnerships and fostering collaboration, we expand our reach and effectiveness. Together, we harness these diverse resources to address multifaceted challenges and foster meaningful change. They constitute the backbone of our efforts, driving us towards a future of collective prosperity and well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
