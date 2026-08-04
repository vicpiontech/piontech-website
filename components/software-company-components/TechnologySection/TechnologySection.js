import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

import ict1 from 'public/images/partners/ict solutions/partner_logo_1.webp';
import ict2 from 'public/images/partners/ict solutions/partner_logo_2.webp';
import ict3 from 'public/images/partners/ict solutions/partner_logo_3.webp';
import ict4 from 'public/images/partners/ict solutions/partner_logo_4.webp';
import ict5 from 'public/images/partners/ict solutions/partner_logo_5.webp';
import ict6 from 'public/images/partners/ict solutions/partner_logo_6.webp';
import ict7 from 'public/images/partners/ict solutions/partner_logo_7.webp';
import ict8 from 'public/images/partners/ict solutions/partner_logo_8.webp';
import ict9 from 'public/images/partners/ict solutions/partner_logo_9.webp';
import ict10 from 'public/images/partners/ict solutions/partner_logo_10.webp';
import ict11 from 'public/images/partners/ict solutions/partner_logo_11.webp';
import ict12 from 'public/images/partners/ict solutions/partner_logo_12.webp';
import ict13 from 'public/images/partners/ict solutions/partner_logo_13.webp';
import ict14 from 'public/images/partners/ict solutions/partner_logo_14.webp';
import ict15 from 'public/images/partners/ict solutions/partner_logo_15.webp';
import ict16 from 'public/images/partners/ict solutions/partner_logo_38.webp';
import ict17 from 'public/images/partners/ict solutions/partner_logo_39.webp';
import ict18 from 'public/images/partners/ict solutions/partner_logo_40.webp';
import ict19 from 'public/images/partners/ict solutions/partner_logo_41.webp';
import ict20 from 'public/images/partners/ict solutions/partner_logo_42.webp';
import ict21 from 'public/images/partners/ict solutions/partner_logo_47.webp';

import sec1 from 'public/images/partners/integrated security/partner_logo_4.webp';
import sec2 from 'public/images/partners/integrated security/partner_logo_16.webp';
import sec3 from 'public/images/partners/integrated security/partner_logo_17.webp';
import sec4 from 'public/images/partners/integrated security/partner_logo_18.webp';
import sec5 from 'public/images/partners/integrated security/partner_logo_19.webp';
import sec6 from 'public/images/partners/integrated security/partner_logo_20.webp';
import sec7 from 'public/images/partners/integrated security/partner_logo_21.webp';
import sec8 from 'public/images/partners/integrated security/partner_logo_22.webp';
import sec9 from 'public/images/partners/integrated security/partner_logo_23.webp';
import sec10 from 'public/images/partners/integrated security/partner_logo_24.webp';
import sec11 from 'public/images/partners/integrated security/partner_logo_25.webp';

import ent1 from 'public/images/partners/enterprise applications/partner_logo_4.webp';
import ent2 from 'public/images/partners/enterprise applications/partner_logo_24.webp';
import ent3 from 'public/images/partners/enterprise applications/partner_logo_26.webp';
import ent4 from 'public/images/partners/enterprise applications/partner_logo_27.webp';
import ent5 from 'public/images/partners/enterprise applications/partner_logo_28.webp';
import ent6 from 'public/images/partners/enterprise applications/partner_logo_29.webp';
import ent7 from 'public/images/partners/enterprise applications/partner_logo_30.webp';
import ent8 from 'public/images/partners/enterprise applications/partner_logo_31.webp';
import ent9 from 'public/images/partners/enterprise applications/partner_logo_38.webp';
import ent10 from 'public/images/partners/enterprise applications/partner_logo_45.webp';
import ent11 from 'public/images/partners/enterprise applications/partner_logo_47.webp';
import ent12 from 'public/images/partners/enterprise applications/partner_logo_48.webp';

import cus1 from 'public/images/partners/custom software/partner_logo_4.webp';
import cus2 from 'public/images/partners/custom software/partner_logo_18.webp';
import cus3 from 'public/images/partners/custom software/partner_logo_22.webp';
import cus4 from 'public/images/partners/custom software/partner_logo_23.webp';
import cus5 from 'public/images/partners/custom software/partner_logo_27.webp';
import cus6 from 'public/images/partners/custom software/partner_logo_29.webp';
import cus7 from 'public/images/partners/custom software/partner_logo_38.webp';

import tel1 from 'public/images/partners/telecommunication/partner_logo_2.webp';
import tel2 from 'public/images/partners/telecommunication/partner_logo_3.webp';
import tel3 from 'public/images/partners/telecommunication/partner_logo_5.webp';
import tel4 from 'public/images/partners/telecommunication/partner_logo_6.webp';
import tel5 from 'public/images/partners/telecommunication/partner_logo_7.webp';
import tel6 from 'public/images/partners/telecommunication/partner_logo_8.webp';
import tel7 from 'public/images/partners/telecommunication/partner_logo_9.webp';
import tel8 from 'public/images/partners/telecommunication/partner_logo_10.webp';
import tel9 from 'public/images/partners/telecommunication/partner_logo_13.webp';
import tel10 from 'public/images/partners/telecommunication/partner_logo_14.webp';
import tel11 from 'public/images/partners/telecommunication/partner_logo_15.webp';
import tel12 from 'public/images/partners/telecommunication/partner_logo_16.webp';
import tel13 from 'public/images/partners/telecommunication/partner_logo_32.webp';
import tel14 from 'public/images/partners/telecommunication/partner_logo_33.webp';
import tel15 from 'public/images/partners/telecommunication/partner_logo_34.webp';
import tel16 from 'public/images/partners/telecommunication/partner_logo_35.webp';
import tel17 from 'public/images/partners/telecommunication/partner_logo_36.webp';
import tel18 from 'public/images/partners/telecommunication/partner_logo_37.webp';
import tel19 from 'public/images/partners/telecommunication/partner_logo_38.webp';
import tel20 from 'public/images/partners/telecommunication/partner_logo_39.webp';
import tel21 from 'public/images/partners/telecommunication/partner_logo_40.webp';
import tel22 from 'public/images/partners/telecommunication/partner_logo_41.webp';
import tel23 from 'public/images/partners/telecommunication/partner_logo_42.webp';
import tel24 from 'public/images/partners/telecommunication/partner_logo_45.webp';
import tel25 from 'public/images/partners/telecommunication/partner_logo_46.webp';

import pwr1 from 'public/images/partners/power energy/partner_logo_43.webp';
import pwr2 from 'public/images/partners/power energy/partner_logo_44.webp';

const partnerSets = {
'ict-solutions-systems-and-hardware': [
{ id: 'ict-1', image: ict1 }, { id: 'ict-2', image: ict2 }, { id: 'ict-3', image: ict3 }, { id: 'ict-4', image: ict4 }, { id: 'ict-5', image: ict5 },
{ id: 'ict-6', image: ict6 }, { id: 'ict-7', image: ict7 }, { id: 'ict-8', image: ict8 }, { id: 'ict-9', image: ict9 }, { id: 'ict-10', image: ict10 },
{ id: 'ict-11', image: ict11 }, { id: 'ict-12', image: ict12 }, { id: 'ict-13', image: ict13 }, { id: 'ict-14', image: ict14 }, { id: 'ict-15', image: ict15 },
{ id: 'ict-16', image: ict16 }, { id: 'ict-17', image: ict17 }, { id: 'ict-18', image: ict18 }, { id: 'ict-19', image: ict19 }, { id: 'ict-20', image: ict20 },
{ id: 'ict-21', image: ict21 },
],
'integrated-security-solutions': [
{ id: 'sec-1', image: sec1 }, { id: 'sec-2', image: sec2 }, { id: 'sec-3', image: sec3 }, { id: 'sec-4', image: sec4 },
{ id: 'sec-5', image: sec5 }, { id: 'sec-6', image: sec6 }, { id: 'sec-7', image: sec7 }, { id: 'sec-8', image: sec8 },
{ id: 'sec-9', image: sec9 }, { id: 'sec-10', image: sec10 }, { id: 'sec-11', image: sec11 },
],
'enterprise-applications': [
{ id: 'ent-1', image: ent1 }, { id: 'ent-2', image: ent2 }, { id: 'ent-3', image: ent3 }, { id: 'ent-4', image: ent4 }, { id: 'ent-5', image: ent5 },
{ id: 'ent-6', image: ent6 }, { id: 'ent-7', image: ent7 }, { id: 'ent-8', image: ent8 }, { id: 'ent-9', image: ent9 }, { id: 'ent-10', image: ent10 },
{ id: 'ent-11', image: ent11 }, { id: 'ent-12', image: ent12 },
],
'custom-software-and-integration': [
{ id: 'cus-1', image: cus1 }, { id: 'cus-2', image: cus2 }, { id: 'cus-3', image: cus3 }, { id: 'cus-4', image: cus4 },
{ id: 'cus-5', image: cus5 }, { id: 'cus-6', image: cus6 }, { id: 'cus-7', image: cus7 },
],
'telecommunication-solutions': [
{ id: 'tel-1', image: tel1 }, { id: 'tel-2', image: tel2 }, { id: 'tel-3', image: tel3 }, { id: 'tel-4', image: tel4 }, { id: 'tel-5', image: tel5 },
{ id: 'tel-6', image: tel6 }, { id: 'tel-7', image: tel7 }, { id: 'tel-8', image: tel8 }, { id: 'tel-9', image: tel9 }, { id: 'tel-10', image: tel10 },
{ id: 'tel-11', image: tel11 }, { id: 'tel-12', image: tel12 }, { id: 'tel-13', image: tel13 }, { id: 'tel-14', image: tel14 }, { id: 'tel-15', image: tel15 },
{ id: 'tel-16', image: tel16 }, { id: 'tel-17', image: tel17 }, { id: 'tel-18', image: tel18 }, { id: 'tel-19', image: tel19 }, { id: 'tel-20', image: tel20 },
{ id: 'tel-21', image: tel21 }, { id: 'tel-22', image: tel22 }, { id: 'tel-23', image: tel23 }, { id: 'tel-24', image: tel24 }, { id: 'tel-25', image: tel25 },
],
'power-and-renewable-energy': [
{ id: 'pwr-1', image: pwr1 }, { id: 'pwr-2', image: pwr2 },
],
};

const defaultBrandLogos = partnerSets['ict-solutions-systems-and-hardware'];

const TechnologySection = ({ serviceSlug }) => {
const brandLogos = partnerSets[serviceSlug] || defaultBrandLogos;

const sliderSettings = {
dots: false,
infinite: true,
speed: 3000,
slidesToShow: 6,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 0,
cssEase: 'linear',
arrows: false,
responsive: [
{
breakpoint: 1200,
settings: {
slidesToShow: 5,
},
},
{
breakpoint: 992,
settings: {
slidesToShow: 4,
},
},
{
breakpoint: 768,
settings: {
slidesToShow: 3,
},
},
{
breakpoint: 576,
settings: {
slidesToShow: 2,
},
},
],
};

return (
<div className="section_space">
<div className="heading_block text-center">
<div
className="heading_focus_text has_underline d-inline-flex"
style={{ backgroundImage: `url(${'/images/shapes/shape_title_under_line.svg'})` }}
>
Brands We Work With
</div>
<h2 className="heading_text mb-0">
Trusted <mark>Technology Partners</mark>
</h2>
</div>

<div className="client_logo_carousel brand_logo_carousel">
<Slider {...sliderSettings}>
{brandLogos.map((brand) => (
<div className="client_logo_item" key={brand.id}>
<Image src={brand.image} alt="Partner logo" />
</div>
))}
</Slider>
</div>
</div>
);
};

export default TechnologySection;
