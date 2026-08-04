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
import ict38 from 'public/images/partners/ict solutions/partner_logo_38.webp';
import ict39 from 'public/images/partners/ict solutions/partner_logo_39.webp';
import ict40 from 'public/images/partners/ict solutions/partner_logo_40.webp';
import ict41 from 'public/images/partners/ict solutions/partner_logo_41.webp';
import ict42 from 'public/images/partners/ict solutions/partner_logo_42.webp';
import ict47 from 'public/images/partners/ict solutions/partner_logo_47.webp';

import sec4 from 'public/images/partners/integrated security/partner_logo_4.webp';
import sec16 from 'public/images/partners/integrated security/partner_logo_16.webp';
import sec17 from 'public/images/partners/integrated security/partner_logo_17.webp';
import sec18 from 'public/images/partners/integrated security/partner_logo_18.webp';
import sec19 from 'public/images/partners/integrated security/partner_logo_19.webp';
import sec20 from 'public/images/partners/integrated security/partner_logo_20.webp';
import sec21 from 'public/images/partners/integrated security/partner_logo_21.webp';
import sec22 from 'public/images/partners/integrated security/partner_logo_22.webp';
import sec23 from 'public/images/partners/integrated security/partner_logo_23.webp';
import sec24 from 'public/images/partners/integrated security/partner_logo_24.webp';
import sec25 from 'public/images/partners/integrated security/partner_logo_25.webp';

import ent4 from 'public/images/partners/enterprise applications/partner_logo_4.webp';
import ent24 from 'public/images/partners/enterprise applications/partner_logo_24.webp';
import ent26 from 'public/images/partners/enterprise applications/partner_logo_26.webp';
import ent27 from 'public/images/partners/enterprise applications/partner_logo_27.webp';
import ent28 from 'public/images/partners/enterprise applications/partner_logo_28.webp';
import ent29 from 'public/images/partners/enterprise applications/partner_logo_29.webp';
import ent30 from 'public/images/partners/enterprise applications/partner_logo_30.webp';
import ent31 from 'public/images/partners/enterprise applications/partner_logo_31.webp';
import ent38 from 'public/images/partners/enterprise applications/partner_logo_38.webp';
import ent45 from 'public/images/partners/enterprise applications/partner_logo_45.webp';
import ent47 from 'public/images/partners/enterprise applications/partner_logo_47.webp';
import ent48 from 'public/images/partners/enterprise applications/partner_logo_48.webp';

import cus4 from 'public/images/partners/custom software/partner_logo_4.webp';
import cus18 from 'public/images/partners/custom software/partner_logo_18.webp';
import cus22 from 'public/images/partners/custom software/partner_logo_22.webp';
import cus23 from 'public/images/partners/custom software/partner_logo_23.webp';
import cus27 from 'public/images/partners/custom software/partner_logo_27.webp';
import cus29 from 'public/images/partners/custom software/partner_logo_29.webp';
import cus38 from 'public/images/partners/custom software/partner_logo_38.webp';

import tel2 from 'public/images/partners/telecommunication/partner_logo_2.webp';
import tel3 from 'public/images/partners/telecommunication/partner_logo_3.webp';
import tel5 from 'public/images/partners/telecommunication/partner_logo_5.webp';
import tel6 from 'public/images/partners/telecommunication/partner_logo_6.webp';
import tel7 from 'public/images/partners/telecommunication/partner_logo_7.webp';
import tel8 from 'public/images/partners/telecommunication/partner_logo_8.webp';
import tel9 from 'public/images/partners/telecommunication/partner_logo_9.webp';
import tel10 from 'public/images/partners/telecommunication/partner_logo_10.webp';
import tel13 from 'public/images/partners/telecommunication/partner_logo_13.webp';
import tel14 from 'public/images/partners/telecommunication/partner_logo_14.webp';
import tel15 from 'public/images/partners/telecommunication/partner_logo_15.webp';
import tel16 from 'public/images/partners/telecommunication/partner_logo_16.webp';
import tel32 from 'public/images/partners/telecommunication/partner_logo_32.webp';
import tel33 from 'public/images/partners/telecommunication/partner_logo_33.webp';
import tel34 from 'public/images/partners/telecommunication/partner_logo_34.webp';
import tel35 from 'public/images/partners/telecommunication/partner_logo_35.webp';
import tel36 from 'public/images/partners/telecommunication/partner_logo_36.webp';
import tel37 from 'public/images/partners/telecommunication/partner_logo_37.webp';
import tel38 from 'public/images/partners/telecommunication/partner_logo_38.webp';
import tel39 from 'public/images/partners/telecommunication/partner_logo_39.webp';
import tel40 from 'public/images/partners/telecommunication/partner_logo_40.webp';
import tel41 from 'public/images/partners/telecommunication/partner_logo_41.webp';
import tel42 from 'public/images/partners/telecommunication/partner_logo_42.webp';
import tel45 from 'public/images/partners/telecommunication/partner_logo_45.webp';
import tel46 from 'public/images/partners/telecommunication/partner_logo_46.webp';

import pwr43 from 'public/images/partners/power energy/partner_logo_43.webp';
import pwr44 from 'public/images/partners/power energy/partner_logo_44.webp';

import sfa4 from 'public/images/partners/smart facilities automation/partner_logo_4.webp';
import sfa18 from 'public/images/partners/smart facilities automation/partner_logo_18.webp';
import sfa27 from 'public/images/partners/smart facilities automation/partner_logo_27.webp';
import sfa29 from 'public/images/partners/smart facilities automation/partner_logo_29.webp';
import sfa30 from 'public/images/partners/smart facilities automation/partner_logo_30.webp';
import sfa31 from 'public/images/partners/smart facilities automation/partner_logo_31.webp';
import sfa45 from 'public/images/partners/smart facilities automation/partner_logo_45.webp';

import iot4 from 'public/images/partners/iot solutions/partner_logo_4.webp';
import iot18 from 'public/images/partners/iot solutions/partner_logo_18.webp';
import iot27 from 'public/images/partners/iot solutions/partner_logo_27.webp';
import iot29 from 'public/images/partners/iot solutions/partner_logo_29.webp';
import iot30 from 'public/images/partners/iot solutions/partner_logo_30.webp';
import iot31 from 'public/images/partners/iot solutions/partner_logo_31.webp';
import iot32 from 'public/images/partners/iot solutions/partner_logo_32.webp';
import iot45 from 'public/images/partners/iot solutions/partner_logo_45.webp';
import iot46 from 'public/images/partners/iot solutions/partner_logo_46.webp';

const partnerSets = {
'ict-solutions-systems-and-hardware': [
{ id: 'ict-1', image: ict1 },
{ id: 'ict-2', image: ict2 },
{ id: 'ict-3', image: ict3 },
{ id: 'ict-4', image: ict4 },
{ id: 'ict-5', image: ict5 },
{ id: 'ict-6', image: ict6 },
{ id: 'ict-7', image: ict7 },
{ id: 'ict-8', image: ict8 },
{ id: 'ict-9', image: ict9 },
{ id: 'ict-10', image: ict10 },
{ id: 'ict-11', image: ict11 },
{ id: 'ict-12', image: ict12 },
{ id: 'ict-13', image: ict13 },
{ id: 'ict-14', image: ict14 },
{ id: 'ict-15', image: ict15 },
{ id: 'ict-38', image: ict38 },
{ id: 'ict-39', image: ict39 },
{ id: 'ict-40', image: ict40 },
{ id: 'ict-41', image: ict41 },
{ id: 'ict-42', image: ict42 },
{ id: 'ict-47', image: ict47 },
],
'integrated-security-solutions': [
{ id: 'sec-4', image: sec4 },
{ id: 'sec-16', image: sec16 },
{ id: 'sec-17', image: sec17 },
{ id: 'sec-18', image: sec18 },
{ id: 'sec-19', image: sec19 },
{ id: 'sec-20', image: sec20 },
{ id: 'sec-21', image: sec21 },
{ id: 'sec-22', image: sec22 },
{ id: 'sec-23', image: sec23 },
{ id: 'sec-24', image: sec24 },
{ id: 'sec-25', image: sec25 },
],
'enterprise-applications': [
{ id: 'ent-4', image: ent4 },
{ id: 'ent-24', image: ent24 },
{ id: 'ent-26', image: ent26 },
{ id: 'ent-27', image: ent27 },
{ id: 'ent-28', image: ent28 },
{ id: 'ent-29', image: ent29 },
{ id: 'ent-30', image: ent30 },
{ id: 'ent-31', image: ent31 },
{ id: 'ent-38', image: ent38 },
{ id: 'ent-45', image: ent45 },
{ id: 'ent-47', image: ent47 },
{ id: 'ent-48', image: ent48 },
],
'custom-software-and-integration': [
{ id: 'cus-4', image: cus4 },
{ id: 'cus-18', image: cus18 },
{ id: 'cus-22', image: cus22 },
{ id: 'cus-23', image: cus23 },
{ id: 'cus-27', image: cus27 },
{ id: 'cus-29', image: cus29 },
{ id: 'cus-38', image: cus38 },
],
'telecommunication-solutions': [
{ id: 'tel-2', image: tel2 },
{ id: 'tel-3', image: tel3 },
{ id: 'tel-5', image: tel5 },
{ id: 'tel-6', image: tel6 },
{ id: 'tel-7', image: tel7 },
{ id: 'tel-8', image: tel8 },
{ id: 'tel-9', image: tel9 },
{ id: 'tel-10', image: tel10 },
{ id: 'tel-13', image: tel13 },
{ id: 'tel-14', image: tel14 },
{ id: 'tel-15', image: tel15 },
{ id: 'tel-16', image: tel16 },
{ id: 'tel-32', image: tel32 },
{ id: 'tel-33', image: tel33 },
{ id: 'tel-34', image: tel34 },
{ id: 'tel-35', image: tel35 },
{ id: 'tel-36', image: tel36 },
{ id: 'tel-37', image: tel37 },
{ id: 'tel-38', image: tel38 },
{ id: 'tel-39', image: tel39 },
{ id: 'tel-40', image: tel40 },
{ id: 'tel-41', image: tel41 },
{ id: 'tel-42', image: tel42 },
{ id: 'tel-45', image: tel45 },
{ id: 'tel-46', image: tel46 },
],
'power-and-renewable-energy': [
{ id: 'pwr-43', image: pwr43 },
{ id: 'pwr-44', image: pwr44 },
],
'smart-facilities-and-automation': [
{ id: 'sfa-4', image: sfa4 },
{ id: 'sfa-18', image: sfa18 },
{ id: 'sfa-27', image: sfa27 },
{ id: 'sfa-29', image: sfa29 },
{ id: 'sfa-30', image: sfa30 },
{ id: 'sfa-31', image: sfa31 },
{ id: 'sfa-45', image: sfa45 },
],
'iot-solutions-and-remote-monitoring': [
{ id: 'iot-4', image: iot4 },
{ id: 'iot-18', image: iot18 },
{ id: 'iot-27', image: iot27 },
{ id: 'iot-29', image: iot29 },
{ id: 'iot-30', image: iot30 },
{ id: 'iot-31', image: iot31 },
{ id: 'iot-32', image: iot32 },
{ id: 'iot-45', image: iot45 },
{ id: 'iot-46', image: iot46 },
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
settings: { slidesToShow: 5 },
},
{
breakpoint: 992,
settings: { slidesToShow: 4 },
},
{
breakpoint: 768,
settings: { slidesToShow: 3 },
},
{
breakpoint: 576,
settings: { slidesToShow: 2 },
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
