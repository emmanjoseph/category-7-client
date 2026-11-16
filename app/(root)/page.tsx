import React from 'react'
import ServicesGrid from "@/components/servicesGrid";
import FeaturesSectionDemo from "@/components/features";
import ContactCTA from "@/components/ContactCTA";
import Stats from "@/components/Stats";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ServiceCloud from "@/components/ServiceCloud";
import About from "@/components/about";

const Page = () => {
    return (
        <>
            <Hero/>
            <About/>
            <ServicesGrid/>
            <FeaturesSectionDemo/>
            <Stats/>
            <Testimonials/>
            <ContactCTA/>
            <Footer/>
        </>
    )
}
export default Page
