
import { P, H2, H5 } from '../TWMicroComponents.js'
import { Colors } from '@/lib/colors';
import { Icon } from '@/lib/icon.js'
import styles from './TWScheduling.module.scss'


import Image from 'next/image'
import { Form } from "@/components/Form";
//css arrow
//import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
export const TWScheduling = ({ section, appearance, branding}) => {
    /** Notes / Todo:
     * 
     * 
     */

    let defaultSection = {
        "type": "scheduling",
        "scheme": "primary",
        "info": {
            "link": {
                "p": "Get Help",
                "href": "https://tlchatt.com/web-development/micro-services/analytics-install-service"
            },
            "image": "/images/CumberlandLandSpecialistsLogo.webp",
            "title": "Land Specialist Consultation",
            "length": "15 min",
            "description": "Schedule a time for a phone call or a digital meeting with one of our land specialists, to discuss your land and real estate needs and goals. Lets find out if we make a good team, and see how we can help you."
        },
        "steps": [
            "date_pick",
            "time_pick",
            "contact_info_form"
        ],
        "date_pick": {
            "title": "Whats a good day for you?",
            "inputs": [
                {
                    "type": "date-pick",
                    "id": "datePick",
                }
            ]
        },
        "time_pick": {
            "title": "Whats a good time for you?",
            "inputs": [
                {
                    "type": "time-pick",
                    "id": "timePick",
                    "time_zone": "America/New_York",
                    "times": [
                        {
                            "hour": 10,
                            "minute": 30
                        },
                        {
                            "hour": 11,
                            "minute": 30
                        },
                        {
                            "hour": 13,
                            "minute": 30
                        },
                        {
                            "hour": 14,
                            "minute": 30
                        }

                    ]
                }
            ]
        },
        "contact_info_form": {
            "title": "Contact Information",
            "inputs": [
                {
                    "type": "text",
                    "content": "Name",
                    "id": "name",
                    "icon": "Person"
                },
                {
                    "type": "tel",
                    "content": "Phone Number",
                    "id": "phone",
                    "icon": "Phone"
                },
                {
                    "type": "email",
                    "content": "Email",
                    "id": "email",
                    "icon": "Email"
                },
                {
                    "type": "textarea",
                    "content": "Additional Info",
                    "id": "message",
                    "icon": "Message"
                },
                {
                    "type": "checkbox",
                    "content": "Calendar Invite",
                    "id": "CalendarInvite",
                    "icon": "Calendar"
                },
                {
                    "type": "checkbox",
                    "content": "Text Reminder",
                    "id": "TextReminders",
                    "icon": "Text"
                },
                {
                    "type": "checkbox",
                    "content": "Email",
                    "id": "EmailReminders",
                    "icon": "Email"
                }
            ]
        },
        "notes": "Specify Time Zone in this format https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"
    }
    section = { ...defaultSection, ...section }
    let { fgcolor, bgcolor, fgaccent } = Colors(appearance, section.scheme)
    const componentStyle = {
        backgroundColor: bgcolor,
        color: fgcolor
    }
    //console.log('Currently Selected Date ', selectedDate.toLocaleDateString())
    //console.log('Currently Selected Time ', selectedDate.toTimeString())
    return (
        <div style={componentStyle} className="px-4 py-4" id='TWScheduling'>
            <SchedulingInner section={section}
                appearance={appearance} scheme={section.scheme} />
        </div>
    )
    function SchedulingInner() {
        // console.log('SchedulingItemWrapper ', section)
        /**
         * Notes / Todo:
         * Weird breakpoints, heres why 
         *  match text
         *  on small continue to match text, 
         *  on medium don't match text don't cramp calendar, 
         *  on large dSchedulingInneron't match text because it makes the component too large
         * 
         */
        return (
            <div className='my-4 py-4 
                 grid place-items-center grid-flow-row mx-auto w-fit 
                 shadow-lg rounded-lg shadow-slate-600/50'
                id='SchedulingInner'>
                <SchedulingInfoLogoTitle />
                <div className='px-8 sm:px-12 
                    grid place-items-center 
                    max-w-sm md:max-w-3xl
                    grid-flow-row md:grid-flow-col sm:gap-4'
                    id='SchedulingInfoBottom'
                >
                    <SchedulingInfoDescription />
                    <SchedulingInfoSteps />
                </div>
            </div >
        )


    }
    function SchedulingInfoLogoTitle() {
        // console.log('SchedulingInfo ', section)
        /**
         * Notes / Todo:
         * Add Link to page its on like Example.
         */
        var BorderStyle = {
            borderBottom: `1px  solid ${fgcolor}`,
            margin: '1rem auto'
        }
        return (
            <div className='px-8 sm:px-12 
            grid place-items-center 
            max-w-sm md:max-w-3xl'
                id='SchedulingInfoLogoTitle'
            >
                <div className="relative h-24 w-48" id="BrandImage">
                    {section.info.image &&
                        <Image
                            src={`${section.info.image}`}
                            blurDataURL={`${section.info.image}`}
                            fill
                            style={{
                                objectFit: 'contain',
                            }
                            }
                            alt="Scheduling Brand Logo"
                        />
                    }
                </div>
                <div className='border-b-2 w-full' style={BorderStyle} />
                {section.info.title &&
                    <H2 scheme={section?.scheme} content={section.info.title} appearance={appearance} />
                }
            </div>

        )
    }
    function SchedulingInfoDescription() {
        // console.log('SchedulingInfo ', section)
        /**
         * Notes / Todo:
         * Add Link to page its on like Example.
         */

        const SVGStyle = {
            color: bgcolor,
            background: fgaccent,
            marginTop: '2em',
            marginRight: '1em'
        }
        return (
            <div className='grid grid-flow-row place-content-center' id='SchedulingInfoBottomLeftorTop'>
                {branding.SiteTitle &&
                    <H5 classNames={`mt-2 sm:mt-3 `} scheme={section?.scheme} content={branding.SiteTitle} appearance={appearance} />
                }
                {section.info.length &&
                    <div className='grid grid-flow-col justify-self-start'>
                        <Icon ClassName={styles.SVG} Style={SVGStyle} Name={'Clock'} />
                        <P classNames={` mt-4 sm:mt-8 `} scheme={section?.scheme} content={section.info.length} appearance={appearance} />
                    </div>
                }
                {section.info.medium &&
                    <div className='grid grid-flow-col justify-self-start'>
                        <Icon ClassName={styles.SVG} Style={SVGStyle} Name={'VideoCamera'} />
                        <P classNames={` mt-4 sm:mt-8 `} scheme={section?.scheme} content={section.info.medium} appearance={appearance} />
                    </div>

                }
                {section.info.description &&
                    <P classNames={` mt-4 sm:mt-8 `} scheme={section?.scheme} content={section.info.description} appearance={appearance} />
                }
            </div>
        )
    }
    function SchedulingInfoSteps() {

        /**
         * Notes / Todo:
         * Add Link to page its on like Example.
         * console.log('SchedulingInfoSteps() section: ', section)
         */

        return (
            <div className='grid grid-flow-row' id='RightorBottom'>
                <div>
                    <Form section={section} appearance={appearance} branding={branding}  />
                </div>
            </div>
        )
    }
}


