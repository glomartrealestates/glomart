"use client";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from "@mui/material";

import { MdExpandMore } from "react-icons/md";

export default function Page() {
  const navigation = [
    { name: "Home", href: "#", current: true },
    { name: "Rent", href: "#", current: false },
    { name: "Sell", href: "#", current: false },
    { name: "About", href: "#", current: false },
    { name: "Contact", href: "#", current: false },
  ];
  let data = [
    {
      heading: "Areas",
      links: [
        {
          link: "New Cairo",
          path: "#",
        },
        {
          link: "New Capital City",
          path: "#",
        },
        {
          link: "6th of October City",
          path: "#",
        },
        {
          link: "Ras El Hekma",
          path: "#",
        },
        {
          link: "Ain Sokhna",
          path: "#",
        },
        {
          link: "Mostakbal City",
          path: "#",
        },
        {
          link: "El Sheikh Zayed",
          path: "#",
        },
        {
          link: "Al Alamein",
          path: "#",
        },
        {
          link: "Sidi Abdel Rahman",
          path: "#",
        },
        {
          link: "New Zayed",
          path: "#",
        },
      ],
    },
    {
      heading: "Recommended",
      links: [
        {
          link: "O West Orascom",
          path: "#",
        },
        {
          link: "HAPTown",
          path: "#",
        },
        {
          link: "Madinaty",
          path: "#",
        },
        {
          link: "Garden Residence Hyde Park",
          path: "#",
        },
        {
          link: "El Patio 5 East",
          path: "#",
        },
        {
          link: "Telal Sokhna",
          path: "#",
        },
        {
          link: "Palm Hills New Cairo",
          path: "#",
        },
        {
          link: "Hacienda West",
          path: "#",
        },
        {
          link: "SODIC East",
          path: "#",
        },
        {
          link: "One33",
          path: "#",
        },
      ],
    },
    {
      heading: "Latest Developers",
      links: [
        {
          link: "Orascom Development Egypt",
          path: "#",
        },
        {
          link: "Hassan Allam Properties",
          path: "#",
        },
        {
          link: "Talaat Moustafa Group",
          path: "#",
        },
        {
          link: "Hyde Park",
          path: "#",
        },
        {
          link: "La Vista Developments",
          path: "#",
        },
        {
          link: "Roya Developments",
          path: "#",
        },
        {
          link: "Palm Hills Developments",
          path: "#",
        },
        {
          link: "SODIC",
          path: "#",
        },
        {
          link: "BADRELDIN DEVELOPMENTS",
          path: "#",
        },
        {
          link: "SODIC East",
          path: "#",
        },
        {
          link: "Emaar Misr",
          path: "#",
        },
      ],
    },
    {
      heading: "Top Searches",
      links: [
        {
          link: "Townhouse for sale in The Butt..",
          path: "#",
        },
        {
          link: "Apartment for sale in Esse Resid..",
          path: "#",
        },
        {
          link: "Apartment for sale in Badya w..",
          path: "#",
        },
        {
          link: "esse residence for sale in Sar..",
          path: "#",
        },
        {
          link: "Apartment 2 bedrooms for re..",
          path: "#",
        },
        {
          link: "Twinhouse for sale in Il Monte..",
          path: "#",
        },
        {
          link: "Apartment for sale in Il Latini..",
          path: "#",
        },
        {
          link: "Townhouse 4 bedrooms for ..",
          path: "#",
        },
        {
          link: "Duplex 3 bedrooms for resale i..",
          path: "#",
        },
        {
          link: "Apartment for sale in Karmell..",
          path: "#",
        },
      ],
    },
    {
      heading: "Others",
      links: [
        {
          link: "4 Bedroom Apartments For Sal..",
          path: "#",
        },
        {
          link: "2 Bedroom Apartments For S..",
          path: "#",
        },
        {
          link: "2 Bedroom Apartments For..",
          path: "#",
        },
        {
          link: "2 Bedroom Apartments For ..",
          path: "#",
        },
        {
          link: "3 Bedroom Apartments For..",
          path: "#",
        },
        {
          link: "2 Bedroom Apartments For Sale In ..",
          path: "#",
        },
        {
          link: "2 Bedroom Apartments For Sa..",
          path: "#",
        },
        {
          link: "3 Bedroom Apartments For Sale I..",
          path: "#",
        },
        {
          link: "3 Bedroom Duplexes For Sale In Mo..",
          path: "#",
        },
        {
          link: "3 Bedroom Apartments For Sa..",
          path: "#",
        },
      ],
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const isSmallScreen = useMediaQuery("(max-width: 960px)"); // Adjust this as needed

  return (
    <div
      className="border-t p-5 lg:pl-20 lg:pr-20"
      style={{ borderColor: "#ccc" }}
    >
      <Grid container>
        {data.map((item, index) =>
          isSmallScreen ? (
            <Accordion key={index} style={{ width: "100%" }}>
              <AccordionSummary expandIcon={<MdExpandMore />}>
                <h4
                  className="font-bold mb-3"
                  style={{ color: "rgb(30, 65, 100)" }}
                >
                  {item.heading}
                </h4>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex flex-col gap-2">
                  {item.links.map((itm, indx) => (
                    <a href={itm.path} key={indx} className="text-gray-500">
                      {itm.link}
                    </a>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
          ) : (
            <Grid item xs={12} sm={5.8} md={3.5} lg={2.3} key={index}>
              <h4
                className="font-bold mb-3"
                style={{ color: "rgb(30, 65, 100)" }}
              >
                {item.heading}
              </h4>
              <div className="flex flex-col gap-2 ">
                {item.links.map((itm, indx) => (
                  <a href={itm.path} key={indx} className="text-gray-500">
                    {itm.link}
                  </a>
                ))}
              </div>
            </Grid>
          )
        )}
      </Grid>
      <div className="mt-5">
        <img
          alt="Your Company"
          src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg"
          className="h-8 w-auto"
        />
        <p className="flex justify-between items-center text-gray-600 mt-3 mb-3">
          <span>Real Estate Company</span>
          <span>Download Our Application</span>
        </p>
        <div
          className="flex justify-between items-center border-b pb-4 gap-5"
          style={{ borderColor: "#ccc", flexWrap: "wrap" }}
        >
          <p className="flex gap-4 text-3xl">
            <FaFacebook className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaSquareXTwitter className="cursor-pointer" />
          </p>
          <div className="flex items-center gap-3">
            <svg
              width="101"
              height="37"
              viewBox="0 0 101 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.071 9.96248H15.9389C16.0634 9.96248 16.188 9.83795 16.188 9.71342C16.188 9.5889 16.0634 9.46437 15.9389 9.46437H14.071C13.9464 9.46437 13.8219 9.5889 13.8219 9.71342C13.8219 9.83795 13.9464 9.96248 14.071 9.96248ZM15.0049 26.4002C14.4446 26.4002 14.0087 26.8361 14.0087 27.3964C14.0087 27.9568 14.4446 28.3927 15.0049 28.3927C15.5653 28.3927 16.0012 27.9568 16.0012 27.3964C15.9389 26.8361 15.5031 26.4002 15.0049 26.4002ZM10.2106 25.5285H19.7993V11.3946H10.2106V25.5285ZM40.9068 20.921C40.471 20.921 40.0351 21.0455 39.6615 21.3568C39.288 21.6681 39.0389 22.0417 38.9144 22.5398C38.8521 22.7889 38.8521 22.9757 38.8521 23.1002V24.47C38.8521 25.0927 39.0389 25.5908 39.4125 26.0266C39.7861 26.4625 40.2842 26.6493 40.8446 26.6493C41.5295 26.6493 42.0898 26.4002 42.4634 25.8398C42.837 25.2795 43.0238 24.5946 43.0238 23.7229C43.0238 22.9134 42.837 22.2285 42.4634 21.7304C42.0898 21.17 41.5917 20.921 40.9068 20.921ZM74.4672 20.7964C73.72 20.7964 73.1597 21.1078 72.7861 21.7927C72.4748 22.353 72.288 22.9757 72.288 23.7851C72.288 24.5323 72.4748 25.2172 72.7861 25.7153C73.1597 26.4002 73.72 26.7115 74.4672 26.7115C75.1521 26.7115 75.7125 26.4002 76.0861 25.7153C76.4597 25.1549 76.5842 24.5323 76.5842 23.7229C76.5842 22.9134 76.3974 22.2908 76.0861 21.7927C75.7125 21.1078 75.2144 20.7964 74.4672 20.7964ZM49.9974 20.921C49.5615 20.921 49.1257 21.0455 48.7521 21.3568C48.3785 21.6681 48.1295 22.0417 48.0049 22.5398C47.9427 22.7889 47.9427 22.9757 47.9427 23.1002V24.47C47.9427 25.0927 48.1295 25.5908 48.5031 26.0266C48.8766 26.4625 49.3747 26.6493 49.9351 26.6493C50.62 26.6493 51.1804 26.4002 51.554 25.8398C51.9276 25.2795 52.1144 24.5946 52.1144 23.7229C52.1144 22.9134 51.9276 22.2285 51.554 21.7304C51.1804 21.17 50.6823 20.921 49.9974 20.921ZM31.0068 17.9323C30.8823 18.4304 30.6955 19.1153 30.4464 20.1115L29.5125 23.1002H32.6257L31.6295 20.1115C31.4427 19.8002 31.2559 19.053 31.0068 17.9323ZM88.4144 20.6719C87.7917 20.6719 87.3559 20.921 86.92 21.4191C86.6087 21.7927 86.4219 22.2908 86.3597 22.8512H90.22C90.22 22.2908 90.0955 21.8549 89.8464 21.4191C89.5974 20.9832 89.0993 20.6719 88.4144 20.6719ZM39.1012 12.5153C39.1012 12.453 39.1012 12.3285 39.1012 12.2663V11.7059C38.354 11.7059 37.6068 11.8304 37.6068 12.5153C37.6068 12.9512 37.8559 13.138 38.2295 13.138C38.6653 13.138 38.9766 12.8266 39.1012 12.5153ZM29.0766 9.83795C28.9521 9.46437 28.8898 9.09078 28.7653 8.7172C28.7031 9.02852 28.5785 9.46437 28.454 9.83795L28.0181 11.27H29.5125L29.0766 9.83795ZM90.1578 9.4021C91.5276 9.4021 92.0257 10.5229 92.0257 11.4568C92.0257 11.6436 92.0257 11.8304 91.9634 11.8927H89.0993C89.0993 12.6398 89.7219 13.0134 90.4068 13.0134C90.9049 13.0134 91.2785 12.9512 91.5898 12.8266L91.7766 13.5738C91.4031 13.7606 90.9049 13.8229 90.2823 13.8229C88.9125 13.8229 88.1031 12.9512 88.1031 11.6436C88.0408 10.5229 88.788 9.4021 90.1578 9.4021ZM73.0351 9.52663L73.0974 10.1493C73.2842 9.83795 73.7823 9.4021 74.4672 9.4021C75.2144 9.4021 75.9615 9.90022 75.9615 11.2078V13.7606H74.903V11.3323C74.903 10.7097 74.654 10.2738 74.0936 10.2738C73.6578 10.2738 73.3464 10.5851 73.2219 10.8964C73.1597 10.9587 73.1597 11.1455 73.1597 11.2078V13.6983H72.1012V10.7097C72.1012 10.2115 72.1012 9.83795 72.0389 9.46437H73.0351V9.52663ZM61.7031 9.4021C63.0729 9.4021 63.571 10.5229 63.571 11.4568C63.571 11.6436 63.571 11.8304 63.5087 11.8927H60.6446C60.6446 12.6398 61.2672 13.0134 61.9521 13.0134C62.4502 13.0134 62.8238 12.9512 63.1351 12.8266L63.3219 13.5738C62.9483 13.7606 62.4502 13.8229 61.8276 13.8229C60.4578 13.8229 59.6483 12.9512 59.6483 11.6436C59.6483 10.5229 60.3332 9.4021 61.7031 9.4021ZM57.2823 7.53418H58.3408V13.7606H57.2823V7.53418ZM48.7521 10.2115C48.3163 10.2115 47.8804 10.3361 47.6314 10.5229L47.4446 9.83795C47.7559 9.65116 48.3163 9.46437 49.0012 9.46437C50.371 9.46437 50.7446 10.3361 50.7446 11.27V12.8266C50.7446 13.2002 50.7446 13.5738 50.8068 13.8229H49.8106L49.7483 13.3247C49.4993 13.6361 49.0634 13.8851 48.5031 13.8851C47.6314 13.8851 47.1332 13.2625 47.1332 12.6398C47.1332 11.5813 48.0672 11.021 49.6861 11.021V10.9587C49.6238 10.6474 49.4993 10.2115 48.7521 10.2115ZM42.4012 7.72097C42.7747 7.72097 43.0238 7.97003 43.0238 8.28135C43.0238 8.59267 42.7747 8.84173 42.4012 8.84173C42.0276 8.84173 41.7785 8.59267 41.7785 8.28135C41.7785 7.97003 42.0276 7.72097 42.4012 7.72097ZM42.8993 9.52663V13.8229H41.8408V9.52663H42.8993ZM28.0804 7.90776H29.4502L31.3804 13.8229H30.1974L29.637 12.1417H27.7691L27.271 13.8229H26.1502L28.0804 7.90776ZM20.92 27.4587C20.92 28.5172 20.0483 29.3266 19.0521 29.3266H10.9578C9.89928 29.3266 9.08984 28.4549 9.08984 27.4587V9.46437C9.08984 8.40588 9.96154 7.59644 10.9578 7.59644H19.0521C20.1106 7.59644 20.92 8.46814 20.92 9.46437V27.4587ZM33.9332 27.8946L32.8748 24.5323H29.1389L28.1427 27.8946H26.2125L29.8861 16.438H32.1898L35.9257 27.8946H33.9332ZM34.3691 13.7606H33.3106L31.754 9.46437H32.937L33.6219 11.6436C33.7464 12.0172 33.8087 12.3908 33.9332 12.7021C33.9955 12.3285 34.12 12.0172 34.2446 11.6436L34.9295 9.46437H36.0502L34.3691 13.7606ZM36.5483 12.6398C36.5483 11.5813 37.4823 11.021 39.1012 11.021V10.9587C39.1012 10.7097 38.9766 10.2115 38.2295 10.2115C37.7936 10.2115 37.3578 10.3361 37.1087 10.5229L36.9219 9.83795C37.2332 9.65116 37.7936 9.46437 38.4785 9.46437C39.8483 9.46437 40.2219 10.3361 40.2219 11.27V12.8266C40.2219 13.2002 40.2219 13.5738 40.2842 13.8229H39.288L39.2257 13.3247C38.9766 13.6361 38.5408 13.8851 37.9804 13.8851C37.0464 13.8851 36.5483 13.2625 36.5483 12.6398ZM43.771 26.9606C43.0861 27.7078 42.2144 28.0191 41.2181 28.0191C40.0974 28.0191 39.3502 27.6455 38.8521 26.8361V31.1946H36.9842V22.353C36.9842 21.4813 36.9842 20.5474 36.9219 19.6134H38.5408L38.6653 20.921H38.7276C39.3502 19.9247 40.2842 19.4266 41.5295 19.4266C42.5257 19.4266 43.3351 19.8002 43.9578 20.6096C44.5804 21.3568 44.954 22.4153 44.954 23.6606C44.8917 25.0304 44.5181 26.1512 43.771 26.9606ZM45.7012 13.7606H44.5804V7.53418H45.6389V13.7606H45.7012ZM52.8615 26.9606C52.1766 27.7078 51.3049 28.0191 50.3087 28.0191C49.188 28.0191 48.4408 27.6455 47.9427 26.8361V31.1946H46.0747V22.353C46.0747 21.4813 46.0748 20.5474 46.0125 19.6134H47.6314L47.7559 20.921H47.8181C48.4408 19.9247 49.3747 19.4266 50.62 19.4266C51.6163 19.4266 52.4257 19.8002 53.0483 20.6096C53.7332 21.3568 54.0446 22.4153 54.0446 23.6606C54.0446 25.0304 53.6087 26.1512 52.8615 26.9606ZM54.1068 13.8851C53.5464 13.8851 53.0483 13.6983 52.737 13.138L52.6747 13.7606H51.7408C51.7408 13.4493 51.8031 13.0134 51.8031 12.5776V7.53418H52.8615V10.087C53.1106 9.65116 53.6087 9.4021 54.2314 9.4021C55.2898 9.4021 56.037 10.2738 56.037 11.5813C56.0993 13.138 55.1031 13.8851 54.1068 13.8851ZM63.3842 27.0851C62.637 27.77 61.5785 28.0813 60.271 28.0813C59.0257 28.0813 58.0295 27.8323 57.2823 27.3964L57.7181 25.8398C58.5276 26.338 59.3993 26.5247 60.3955 26.5247C61.0804 26.5247 61.6408 26.338 62.0144 26.0266C62.388 25.7153 62.5747 25.2795 62.5747 24.7813C62.5747 24.3455 62.388 23.9097 62.0766 23.5983C61.7653 23.287 61.2049 22.9757 60.52 22.7266C58.5276 21.9795 57.5314 20.8587 57.5314 19.4266C57.5314 18.4927 57.9049 17.6832 58.5898 17.1229C59.2747 16.5002 60.271 16.2512 61.3917 16.2512C62.4502 16.2512 63.3219 16.438 64.0068 16.8115L63.571 18.3059C62.9483 17.9323 62.2012 17.8078 61.3917 17.8078C60.7691 17.8078 60.2087 17.9946 59.8974 18.3059C59.5861 18.6172 59.4615 18.9285 59.4615 19.3644C59.4615 19.8002 59.6483 20.1738 59.9597 20.4851C60.271 20.7342 60.8314 21.0455 61.6408 21.3568C62.637 21.7304 63.3842 22.2285 63.82 22.7266C64.2559 23.287 64.5049 23.9097 64.5049 24.7191C64.4427 25.653 64.0691 26.4625 63.3842 27.0851ZM69.8597 20.9832H67.8049V25.0304C67.8049 26.0266 68.1785 26.587 68.8634 26.587C69.1747 26.587 69.4861 26.587 69.6729 26.5247L69.7351 27.8946C69.3615 28.0191 68.9257 28.0813 68.3031 28.0813C67.5559 28.0813 66.9955 27.8323 66.6219 27.3964C66.1861 26.9606 65.9993 26.2134 65.9993 25.1549V20.9832H64.8163V19.6134H65.9993V18.1191L67.8049 17.5587V19.6134H69.8597V20.9832ZM68.8634 13.8851C67.6804 13.8851 66.7464 13.0757 66.7464 11.7059C66.7464 10.2738 67.6804 9.46437 68.9257 9.46437C70.171 9.46437 71.0427 10.3361 71.0427 11.6436C71.0427 13.2002 69.9219 13.8851 68.8634 13.8851ZM77.4559 26.8361C76.7087 27.6455 75.6502 28.0813 74.4049 28.0813C73.1597 28.0813 72.2257 27.7078 71.4785 26.8983C70.7313 26.0889 70.42 25.0927 70.42 23.8474C70.42 22.5398 70.7936 21.4813 71.5408 20.6719C72.288 19.8625 73.2842 19.4266 74.5295 19.4266C75.7747 19.4266 76.7087 19.8002 77.4559 20.6096C78.1408 21.4191 78.5144 22.4153 78.5144 23.6606C78.5144 24.9681 78.1408 26.0266 77.4559 26.8361ZM79.3238 9.52663H79.9464V8.7172L81.0049 8.40588V9.52663H82.0012V10.3361H81.0049V12.204C81.0049 12.7021 81.1295 13.0134 81.5653 13.0134C81.7521 13.0134 81.8766 13.0134 82.0012 12.9512V13.7606C81.8144 13.8229 81.5653 13.8851 81.1917 13.8851C80.8181 13.8851 80.4446 13.7606 80.2578 13.5115C80.0087 13.2625 79.9464 12.8889 79.9464 12.3285V10.3361H79.3238V9.52663ZM84.0559 21.2323C83.8691 21.17 83.6823 21.17 83.4955 21.17C82.8729 21.17 82.3748 21.4191 82.0012 21.9172C81.6898 22.353 81.5653 22.9134 81.5653 23.5361V27.8946H79.6974V22.2285C79.6974 21.2946 79.6974 20.4229 79.6351 19.6134H81.254L81.3163 21.17H81.3785C81.5653 20.6097 81.8766 20.1738 82.3125 19.8625C82.7483 19.5512 83.1842 19.4266 83.62 19.4266C83.8068 19.4266 83.9314 19.4266 84.0559 19.4266V21.2323ZM84.3672 11.2078V13.7606H83.3087V7.53418H84.3672V10.087C84.4917 9.90022 84.6785 9.71342 84.9276 9.5889C85.1766 9.46437 85.4257 9.4021 85.6748 9.4021C86.4219 9.4021 87.1691 9.90022 87.1691 11.27V13.7606H86.1106V11.3323C86.1106 10.7097 85.8615 10.2738 85.3012 10.2738C84.8653 10.2738 84.554 10.5851 84.4295 10.8964C84.3672 11.021 84.3672 11.0832 84.3672 11.2078ZM91.9634 24.221H86.4219C86.4219 25.0304 86.7332 25.653 87.2314 26.0889C87.6672 26.4625 88.2898 26.6493 89.037 26.6493C89.8464 26.6493 90.5936 26.5247 91.2785 26.2757L91.5898 27.5832C90.7804 27.9568 89.9087 28.0813 88.788 28.0813C87.4804 28.0813 86.4842 27.7078 85.737 26.9606C84.9898 26.2134 84.6163 25.2172 84.6163 23.9097C84.6163 22.6644 84.9898 21.6059 85.6125 20.7964C86.3596 19.9247 87.2936 19.4889 88.5389 19.4889C89.7219 19.4889 90.6559 19.9247 91.2785 20.7964C91.7766 21.4813 92.0257 22.353 92.0257 23.4115C92.0257 23.6606 91.9634 23.9719 91.9634 24.221ZM53.92 10.2738C53.4842 10.2738 53.0483 10.5851 52.9861 11.0832C52.9861 11.1455 52.9238 11.27 52.9238 11.3946V12.0795C52.9238 12.1417 52.9238 12.2663 52.9238 12.3285C53.0483 12.7644 53.4219 13.0757 53.8578 13.0757C54.5427 13.0757 54.9163 12.5153 54.9163 11.6436C54.9785 10.8964 54.6049 10.2738 53.92 10.2738ZM61.6408 10.1493C60.9559 10.1493 60.7068 10.7719 60.6446 11.2078H62.5125C62.5747 10.8342 62.388 10.1493 61.6408 10.1493ZM68.9257 10.2115C68.1785 10.2115 67.8672 10.9587 67.8672 11.6436C67.8672 12.453 68.3031 13.0757 68.9257 13.0757C69.5483 13.0757 69.9842 12.453 69.9842 11.6436C69.9219 10.9587 69.6106 10.2115 68.9257 10.2115ZM48.1295 12.5153C48.1295 12.9512 48.3785 13.138 48.7521 13.138C49.188 13.138 49.4993 12.8266 49.6238 12.5776C49.6238 12.5153 49.6238 12.3908 49.6238 12.3285V11.7681C48.8766 11.7059 48.1295 11.8304 48.1295 12.5153ZM90.0955 10.1493C89.4106 10.1493 89.1615 10.7719 89.0993 11.2078H90.9672C90.9672 10.8342 90.7804 10.1493 90.0955 10.1493Z"
                fill="#1E4164"
              ></path>
              <path
                d="M95.8863 36.2999H5.16739C2.49003 36.2999 0.373047 34.1207 0.373047 31.5056V5.4169C0.373047 2.8018 2.55229 0.622559 5.16739 0.622559H95.8863C98.5636 0.622559 100.681 2.8018 100.681 5.4169V31.5056C100.681 34.1207 98.5636 36.2999 95.8863 36.2999ZM5.16739 1.86784C3.2372 1.86784 1.61833 3.48671 1.61833 5.4169V31.5056C1.61833 33.498 3.2372 35.0546 5.16739 35.0546H95.8863C97.8787 35.0546 99.4353 33.4358 99.4353 31.5056V5.4169C99.4353 3.42445 97.8164 1.86784 95.8863 1.86784H5.16739Z"
                fill="#1E4164"
              ></path>
            </svg>
            <svg
              width={107}
              height={36}
              viewBox="0 0 107 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M101.335 35.6774H5.4487C2.52229 35.6774 0.15625 33.3113 0.15625 30.3849V5.29245C0.15625 2.36604 2.52229 0 5.4487 0H101.335C104.262 0 106.628 2.36604 106.628 5.29245V30.3849C106.628 33.3113 104.262 35.6774 101.335 35.6774ZM5.4487 1.24528C3.20719 1.24528 1.40153 3.05094 1.40153 5.29245V30.3849C1.40153 32.6264 3.20719 34.4321 5.4487 34.4321H101.335C103.577 34.4321 105.383 32.6264 105.383 30.3849V5.29245C105.383 3.05094 103.577 1.24528 101.335 1.24528H5.4487Z"
                fill="#1E4164"
              />
              <path
                d="M35.5853 10.3978H34.9004C34.9004 10.2733 34.8382 10.0243 34.7136 9.58841H33.7174C33.5929 10.0243 33.5306 10.3356 33.5306 10.3978H32.8457C32.8457 10.3356 33.0325 9.89973 33.3438 8.96577C33.7174 8.09407 33.8419 7.59596 33.8419 7.53369H34.6514C34.6514 7.59596 34.8382 8.09407 35.1495 8.96577C35.3985 9.83746 35.5853 10.3356 35.5853 10.3978ZM34.5268 9.15256C34.2778 8.40539 34.1533 7.96954 34.1533 7.90728H34.091C34.091 7.96954 33.9665 8.40539 33.7174 9.15256H34.5268Z"
                fill="#1E4164"
              />
              <path
                d="M38.3871 10.3978H37.8267C37.8267 10.3356 37.6399 10.0243 37.204 9.46388C36.7682 8.84124 36.5191 8.46765 36.4569 8.2186H36.3946C36.4569 8.52992 36.4569 8.84124 36.4569 9.0903C36.4569 9.46388 36.4569 9.89973 36.4569 10.3978H35.8965C35.8965 9.96199 35.9588 9.46388 35.9588 8.9035C35.9588 8.34313 35.9587 7.90728 35.8965 7.53369H36.5814C36.5814 7.59596 36.7682 7.90728 37.1418 8.46765C37.5154 9.02803 37.7644 9.46388 37.8267 9.65067H37.8889C37.8267 9.33935 37.8267 9.02803 37.8267 8.77897C37.8267 8.40539 37.8267 7.96954 37.8267 7.53369H38.3871C38.3871 7.90728 38.3871 8.34313 38.3871 8.9035C38.3871 9.46388 38.3871 9.96199 38.3871 10.3978Z"
                fill="#1E4164"
              />
              <path
                d="M41.6258 8.84147C41.6258 9.27732 41.5013 9.65091 41.2522 9.96223C41.0032 10.2736 40.6296 10.4603 40.1315 10.4603C39.9447 10.4603 39.6334 10.4603 39.2598 10.4603C39.2598 10.0245 39.2598 9.52638 39.2598 8.966C39.2598 8.40563 39.2598 7.96978 39.2598 7.59619H39.6333C39.6956 7.59619 39.8201 7.59619 39.9447 7.59619C40.0692 7.59619 40.1315 7.59619 40.1937 7.59619C40.7541 7.59619 41.1277 7.72072 41.3767 7.96978C41.5013 8.15657 41.6258 8.46789 41.6258 8.84147ZM41.0032 8.966C41.0032 8.65468 40.9409 8.46789 40.7541 8.2811C40.5673 8.0943 40.3183 7.96978 40.0069 7.96978C39.9447 7.96978 39.8824 7.96978 39.7579 7.96978C39.7579 8.2811 39.7579 8.59242 39.7579 8.90374C39.7579 9.27732 39.7579 9.58864 39.7579 9.96223C39.8824 9.96223 39.9447 9.96223 40.0692 9.96223C40.3805 9.96223 40.6296 9.8377 40.7541 9.65091C40.9409 9.46412 41.0032 9.21506 41.0032 8.966Z"
                fill="#1E4164"
              />
              <path
                d="M44.5516 10.3981H43.8667C43.6799 9.89998 43.5554 9.5264 43.4931 9.40187C43.4308 9.27734 43.244 9.21508 43.0572 9.21508C42.995 9.21508 42.8705 9.21508 42.8082 9.21508C42.8082 9.58866 42.8082 9.96225 42.8082 10.3358H42.1855C42.1855 9.89998 42.1855 9.40187 42.1855 8.84149C42.1855 8.28111 42.1855 7.84526 42.1855 7.47168H42.5591C42.6214 7.47168 42.6837 7.47168 42.8082 7.47168C42.9327 7.47168 43.0572 7.47168 43.1818 7.47168C43.8667 7.47168 44.178 7.72074 44.178 8.15659C44.178 8.53017 43.9912 8.77923 43.6176 8.90376V8.96602C43.7422 9.02828 43.8667 9.15281 43.9912 9.3396C44.2403 9.5264 44.3648 9.89998 44.5516 10.3981ZM43.7422 8.34338C43.7422 8.03206 43.5554 7.90753 43.1818 7.90753C43.0572 7.90753 42.9327 7.90753 42.8082 7.90753C42.8082 8.15659 42.8082 8.40564 42.8082 8.77923C42.8705 8.77923 42.9327 8.77923 42.995 8.77923C43.4931 8.84149 43.7422 8.71696 43.7422 8.34338Z"
                fill="#1E4164"
              />
              <path
                d="M47.7277 8.90352C47.7277 9.33937 47.6031 9.71295 47.2918 10.0243C47.0428 10.3356 46.6692 10.4601 46.2956 10.4601C45.922 10.4601 45.6107 10.3356 45.2994 10.0243C45.0503 9.77522 44.9258 9.40163 44.9258 8.96578C44.9258 8.52993 45.0503 8.15635 45.3616 7.84503C45.6107 7.53371 45.9843 7.40918 46.3579 7.40918C46.7314 7.40918 47.0428 7.53371 47.3541 7.84503C47.6031 8.15635 47.7277 8.46767 47.7277 8.90352ZM47.105 8.96578C47.105 8.65446 47.0428 8.40541 46.856 8.21861C46.6692 8.03182 46.4824 7.90729 46.2956 7.90729C46.1088 7.90729 45.922 8.03182 45.7352 8.21861C45.6107 8.40541 45.4862 8.65446 45.4862 8.96578C45.4862 9.2771 45.5484 9.52616 45.7352 9.71295C45.922 9.89975 46.1088 10.0243 46.2956 10.0243C46.4824 10.0243 46.6692 9.89975 46.856 9.71295C47.0428 9.52616 47.105 9.2771 47.105 8.96578Z"
                fill="#1E4164"
              />
              <path
                d="M48.9723 10.3978H48.3496C48.3496 9.96199 48.3496 9.46388 48.3496 8.9035C48.3496 8.34313 48.3496 7.90728 48.3496 7.53369H48.9723C48.9723 7.90728 48.9723 8.34313 48.9723 8.9035C48.9723 9.46388 48.9723 9.96199 48.9723 10.3978Z"
                fill="#1E4164"
              />
              <path
                d="M52.1473 8.84147C52.1473 9.27732 52.0228 9.65091 51.7737 9.96223C51.5246 10.2736 51.1511 10.4603 50.653 10.4603C50.4039 10.4603 50.1548 10.4603 49.7812 10.4603C49.7812 10.0245 49.7812 9.52638 49.7812 8.966C49.7812 8.40563 49.7812 7.96978 49.7812 7.59619H50.1548C50.2171 7.59619 50.3416 7.59619 50.4662 7.59619C50.5907 7.59619 50.6529 7.59619 50.7152 7.59619C51.2756 7.59619 51.6492 7.72072 51.8982 7.96978C52.085 8.15657 52.1473 8.46789 52.1473 8.84147ZM51.5869 8.966C51.5869 8.65468 51.5246 8.46789 51.3379 8.2811C51.1511 8.0943 50.902 7.96978 50.5907 7.96978C50.5284 7.96978 50.4662 7.96978 50.3416 7.96978C50.3416 8.2811 50.3416 8.59242 50.3416 8.90374C50.3416 9.27732 50.3416 9.58864 50.3416 9.96223C50.4662 9.96223 50.5284 9.96223 50.653 9.96223C50.9643 9.96223 51.2133 9.8377 51.3379 9.65091C51.5246 9.46412 51.5869 9.21506 51.5869 8.966Z"
                fill="#1E4164"
              />
              <path
                d="M56.4447 10.3978H55.7598C55.7598 10.2733 55.6975 10.0243 55.573 9.58841H54.5768C54.4522 10.0243 54.39 10.3356 54.39 10.3978H53.7051C53.7051 10.3356 53.8919 9.89973 54.2032 8.96577C54.5768 8.09407 54.7013 7.59596 54.7013 7.53369H55.5107C55.5107 7.59596 55.6975 8.09407 56.0089 8.96577C56.2579 9.83746 56.4447 10.3356 56.4447 10.3978ZM55.3862 9.15256C55.1372 8.40539 55.0126 7.96954 55.0126 7.90728H54.9504C54.9504 7.96954 54.8258 8.40539 54.5768 9.15256H55.3862Z"
                fill="#1E4164"
              />
              <path
                d="M58.9961 8.2811C58.9961 8.65468 58.8716 8.90374 58.6225 9.09053C58.3735 9.27732 58.0621 9.33959 57.6886 9.33959C57.6263 9.33959 57.564 9.33959 57.564 9.33959C57.564 9.58864 57.564 9.96223 57.564 10.4603H56.9414C56.9414 10.0245 56.9414 9.52638 56.9414 8.966C56.9414 8.40563 56.9414 7.96978 56.9414 7.59619H57.315C57.3772 7.59619 57.5018 7.59619 57.6263 7.59619C57.7508 7.59619 57.9376 7.59619 57.9999 7.59619C58.2489 7.59619 58.498 7.65846 58.6848 7.78298C58.9339 7.84525 58.9961 8.03204 58.9961 8.2811ZM58.4357 8.40563C58.4357 8.0943 58.2489 7.90751 57.8131 7.90751C57.6886 7.90751 57.6263 7.90751 57.5018 7.96978C57.5018 8.21883 57.5018 8.59242 57.5018 8.90374C57.564 8.90374 57.564 8.90374 57.6263 8.90374C58.1867 8.90374 58.4357 8.71695 58.4357 8.40563Z"
                fill="#1E4164"
              />
              <path
                d="M61.6739 8.2811C61.6739 8.65468 61.5493 8.90374 61.3003 9.09053C61.0512 9.27732 60.7399 9.33959 60.3663 9.33959C60.3041 9.33959 60.2418 9.33959 60.2418 9.33959C60.2418 9.58864 60.2418 9.96223 60.2418 10.4603H59.6191C59.6191 10.0245 59.6191 9.52638 59.6191 8.966C59.6191 8.40563 59.6191 7.96978 59.6191 7.59619H59.9927C60.055 7.59619 60.1795 7.59619 60.3041 7.59619C60.4286 7.59619 60.6154 7.59619 60.6776 7.59619C60.9267 7.59619 61.1757 7.65846 61.3625 7.78298C61.5493 7.84525 61.6739 8.03204 61.6739 8.2811ZM61.0512 8.40563C61.0512 8.0943 60.8644 7.90751 60.4286 7.90751C60.304 7.90751 60.2418 7.90751 60.1172 7.96978C60.1172 8.21883 60.1172 8.59242 60.1172 8.90374C60.1795 8.90374 60.1795 8.90374 60.2418 8.90374C60.8022 8.90374 61.0512 8.71695 61.0512 8.40563Z"
                fill="#1E4164"
              />
              <path
                d="M65.9699 8.90352C65.9699 9.33937 65.8453 9.71295 65.534 10.0243C65.2849 10.3356 64.9114 10.4601 64.5378 10.4601C64.1642 10.4601 63.8529 10.3356 63.5415 10.0243C63.2925 9.77522 63.168 9.40163 63.168 8.96578C63.168 8.52993 63.2925 8.15635 63.6038 7.84503C63.8529 7.53371 64.2265 7.40918 64.6 7.40918C64.9736 7.40918 65.2849 7.53371 65.5963 7.84503C65.8453 8.15635 65.9699 8.46767 65.9699 8.90352ZM65.3472 8.96578C65.3472 8.65446 65.2849 8.40541 65.0981 8.21861C64.9113 8.03182 64.7246 7.90729 64.5378 7.90729C64.351 7.90729 64.1642 8.03182 63.9774 8.21861C63.8529 8.40541 63.7283 8.65446 63.7283 8.96578C63.7283 9.2771 63.7906 9.52616 63.9774 9.71295C64.1642 9.89975 64.351 10.0243 64.5378 10.0243C64.7246 10.0243 64.9113 9.89975 65.0981 9.71295C65.2849 9.52616 65.3472 9.2771 65.3472 8.96578Z"
                fill="#1E4164"
              />
              <path
                d="M68.9598 10.3978H68.3994C68.3994 10.3356 68.2126 10.0243 67.7768 9.46388C67.3409 8.84124 67.0919 8.46765 67.0296 8.2186H67.0919C67.1541 8.52992 67.1541 8.84124 67.1541 9.0903C67.1541 9.46388 67.1541 9.89973 67.1541 10.3978H66.5938C66.5938 9.96199 66.656 9.46388 66.656 8.9035C66.656 8.34313 66.656 7.90728 66.5938 7.53369H67.2786C67.2786 7.59596 67.4654 7.90728 67.839 8.46765C68.2126 9.02803 68.4617 9.46388 68.5239 9.65067H68.5862C68.5239 9.33935 68.5239 9.02803 68.5239 8.77897C68.5239 8.40539 68.5239 7.96954 68.5239 7.53369H69.0843C69.0843 7.90728 69.0843 8.34313 69.0843 8.9035C68.9598 9.46388 68.9598 9.96199 68.9598 10.3978Z"
                fill="#1E4164"
              />
              <path
                d="M42.9318 19.6133C42.9318 21.0454 42.4959 22.1661 41.6865 23.0378C40.7525 24.0341 39.445 24.5322 37.9507 24.5322C36.4563 24.5322 35.211 24.0341 34.2148 22.9756C33.1563 21.9794 32.6582 20.6718 32.6582 19.1775C32.6582 17.6831 33.1563 16.3756 34.2148 15.3794C35.2733 14.3831 36.5186 13.8228 37.9507 13.8228C38.6978 13.8228 39.3827 13.9473 40.0676 14.2586C40.7525 14.5699 41.2507 14.9435 41.6865 15.3794L40.8148 16.2511C40.1299 15.4416 39.1959 15.068 38.0129 15.068C36.9544 15.068 36.0205 15.4416 35.211 16.1888C34.4016 16.936 34.028 17.9322 34.028 19.1152C34.028 20.2982 34.4016 21.2945 35.211 22.0416C36.0205 22.7888 36.9544 23.1624 38.0129 23.1624C39.1337 23.1624 40.1299 22.7888 40.8771 22.0416C41.3752 21.5435 41.6865 20.8586 41.7488 19.9869H38.0129V18.7416H42.9941C42.8695 19.1152 42.9318 19.3643 42.9318 19.6133Z"
                fill="#1E4164"
              />
              <path
                d="M44.4873 18.1815C45.1722 17.4966 46.0439 17.123 47.0401 17.123C48.0986 17.123 48.9703 17.4966 49.593 18.1815C50.2779 18.8664 50.5892 19.8004 50.5892 20.8589C50.5892 21.9174 50.2779 22.7891 49.593 23.5363C48.9081 24.2212 48.0364 24.5947 47.0401 24.5947C45.9817 24.5947 45.11 24.2212 44.4873 23.5363C43.8024 22.8513 43.4911 21.9174 43.4911 20.8589C43.4288 19.7381 43.8024 18.8664 44.4873 18.1815ZM45.4213 22.6646C45.8571 23.1004 46.4175 23.3495 47.0401 23.3495C47.6628 23.3495 48.2232 23.1004 48.659 22.6646C49.0949 22.2287 49.3439 21.6061 49.3439 20.8589C49.3439 20.1117 49.0949 19.4891 48.659 19.0532C48.2232 18.6174 47.6628 18.3683 47.0401 18.3683C46.4175 18.3683 45.8571 18.6174 45.4213 19.0532C44.9854 19.4891 44.7364 20.1117 44.7364 20.8589C44.7986 21.6061 44.9854 22.1664 45.4213 22.6646Z"
                fill="#1E4164"
              />
              <path
                d="M52.0841 18.1815C52.769 17.4966 53.6407 17.123 54.6369 17.123C55.6954 17.123 56.5671 17.4966 57.1898 18.1815C57.8747 18.8664 58.186 19.8004 58.186 20.8589C58.186 21.9174 57.8747 22.7891 57.1898 23.5363C56.5049 24.2212 55.6332 24.5947 54.6369 24.5947C53.5785 24.5947 52.7068 24.2212 52.0841 23.5363C51.3992 22.8513 51.0879 21.9174 51.0879 20.8589C51.0879 19.7381 51.4615 18.8664 52.0841 18.1815ZM53.0803 22.6646C53.5162 23.1004 54.0766 23.3495 54.6992 23.3495C55.3219 23.3495 55.8822 23.1004 56.3181 22.6646C56.7539 22.2287 57.003 21.6061 57.003 20.8589C57.003 20.1117 56.7539 19.4891 56.3181 19.0532C55.8822 18.6174 55.3219 18.3683 54.6992 18.3683C54.0766 18.3683 53.5162 18.6174 53.0803 19.0532C52.6445 19.4891 52.3954 20.1117 52.3954 20.8589C52.3954 21.6061 52.6445 22.1664 53.0803 22.6646Z"
                fill="#1E4164"
              />
              <path
                d="M62.1721 27.6457C61.3627 27.6457 60.6778 27.4589 60.1174 27.023C59.6193 26.5872 59.2457 26.1513 58.9966 25.591L60.1797 25.0929C60.3042 25.4664 60.5532 25.7778 60.9268 26.0268C61.3004 26.2759 61.674 26.4004 62.1721 26.4004C62.9193 26.4004 63.4796 26.2136 63.8532 25.7778C64.2891 25.3419 64.4759 24.7815 64.4759 24.0344V23.3495H64.4136C64.1646 23.6608 63.8532 23.9721 63.4174 24.2212C62.9815 24.4702 62.5457 24.5947 61.9853 24.5947C61.0513 24.5947 60.3042 24.2212 59.6193 23.5363C58.9344 22.8513 58.623 21.9174 58.623 20.8589C58.623 19.8004 58.9344 18.9287 59.6193 18.1815C60.3042 17.4966 61.0513 17.123 61.9853 17.123C62.4834 17.123 62.9815 17.2476 63.4174 17.4344C63.8532 17.6834 64.1646 17.9325 64.4136 18.3061H64.4759V17.3098H65.7212V23.9721C65.7212 25.1551 65.3476 26.0891 64.6627 26.7117C64.04 27.3344 63.1683 27.6457 62.1721 27.6457ZM62.2966 23.3495C62.9193 23.3495 63.4174 23.1004 63.8532 22.6646C64.2891 22.2287 64.4759 21.6061 64.4759 20.7966C64.4759 20.0495 64.2891 19.4268 63.8532 18.9287C63.4174 18.4929 62.9193 18.2438 62.2966 18.2438C61.674 18.2438 61.1759 18.4929 60.74 18.9287C60.3042 19.3646 60.0551 19.9872 60.0551 20.7344C60.0551 21.4815 60.3042 22.1042 60.74 22.54C61.1136 23.1004 61.674 23.3495 62.2966 23.3495Z"
                fill="#1E4164"
              />
              <path
                d="M68.3349 24.3454H67.0273V14.0718H68.3349V24.3454Z"
                fill="#1E4164"
              />
              <path
                d="M72.6311 24.5322C71.5726 24.5322 70.7009 24.1587 70.0782 23.4738C69.3933 22.7888 69.082 21.8549 69.082 20.7964C69.082 19.8002 69.3934 18.9285 70.016 18.1813C70.6386 17.4341 71.4481 17.0605 72.5066 17.0605C73.5651 17.0605 74.3745 17.3719 74.9971 18.0568C75.6198 18.7417 75.9311 19.6134 75.9311 20.7964V21.0455H70.3896C70.4518 21.7304 70.6386 22.2907 71.0745 22.7266C71.5103 23.1624 72.0084 23.3492 72.5688 23.3492C73.5028 23.3492 74.1254 22.9756 74.499 22.1662L75.682 22.6643C75.433 23.2247 75.0594 23.6605 74.5613 24.0341C74.0632 24.3455 73.4405 24.5322 72.6311 24.5322ZM74.5613 19.987C74.5613 19.6134 74.3745 19.1775 74.0009 18.8662C73.6896 18.4926 73.1915 18.3058 72.5066 18.3058C72.0084 18.3058 71.5726 18.4304 71.2613 18.7417C70.95 19.053 70.6386 19.4266 70.5141 19.987H74.5613Z"
                fill="#1E4164"
              />
              <path
                d="M81.1005 24.3454H79.793V14.0718H83.2798C84.1515 14.0718 84.8986 14.3831 85.5213 14.9435C86.1439 15.5039 86.4552 16.251 86.4552 17.1227C86.4552 17.9944 86.1439 18.7416 85.5213 19.302C84.8986 19.8623 84.1515 20.1737 83.2798 20.1737H81.1005V24.3454ZM81.1005 18.9284H83.2798C83.8401 18.9284 84.276 18.7416 84.5873 18.368C84.8986 17.9944 85.0854 17.5586 85.0854 17.1227C85.0854 16.6869 84.8986 16.251 84.5873 15.8774C84.276 15.5039 83.8401 15.3171 83.2798 15.3171H81.1005V18.9284Z"
                fill="#1E4164"
              />
              <path
                d="M88.6337 24.3454H87.3262V14.0718H88.6337V24.3454Z"
                fill="#1E4164"
              />
              <path
                d="M91.996 24.5325C91.2488 24.5325 90.6262 24.3457 90.128 23.9098C89.6299 23.474 89.3809 22.9136 89.3809 22.2287C89.3809 21.4815 89.6922 20.8589 90.2526 20.423C90.813 19.9872 91.5601 19.8004 92.4318 19.8004C93.179 19.8004 93.8639 19.9249 94.2997 20.2363V20.0495C94.2997 19.5513 94.1129 19.1155 93.8016 18.8042C93.428 18.4929 92.9922 18.3683 92.4941 18.3683C92.1205 18.3683 91.7469 18.4306 91.4356 18.6174C91.1243 18.8042 90.9375 19.0532 90.8129 19.3646L89.6299 18.8664C89.8167 18.4306 90.128 18.057 90.5639 17.6834C91.062 17.3098 91.6846 17.123 92.4318 17.123C93.3035 17.123 94.0507 17.3721 94.6733 17.9325C95.2337 18.4306 95.545 19.1778 95.545 20.174V24.408H94.2997V23.4117H94.2375C93.8016 24.1589 93.0545 24.5325 91.996 24.5325ZM92.245 23.3495C92.8054 23.3495 93.3035 23.1627 93.7393 22.7268C94.1752 22.3532 94.4243 21.8551 94.4243 21.2947C94.0507 20.9834 93.4903 20.8589 92.7431 20.8589C92.1205 20.8589 91.6224 20.9834 91.3111 21.2947C90.9997 21.5438 90.8129 21.9174 90.8129 22.291C90.8129 22.6023 90.9375 22.9136 91.2488 23.1004C91.4978 23.2249 91.8714 23.3495 92.245 23.3495Z"
                fill="#1E4164"
              />
              <path
                d="M98.4706 27.3964H97.1008L98.7196 23.8473L95.8555 17.3096H97.2875L99.3422 22.353L101.397 17.3096H102.829L98.4706 27.3964Z"
                fill="#1E4164"
              />
              <path
                d="M8.06445 19.0533C8.06445 15.8156 8.06445 12.5156 8.06445 9.27786C8.06445 8.90428 8.12672 8.53069 8.43804 8.21937C8.56257 8.09484 8.62483 8.09484 8.74936 8.21937C10.9286 10.4609 13.1701 12.7024 15.3494 14.9439C16.7814 16.376 18.2135 17.8703 19.6456 19.3024C19.7701 19.4269 19.7701 19.4892 19.6456 19.676C16.1588 23.1628 12.672 26.6496 9.18521 30.1364C8.99842 30.3231 8.81163 30.3231 8.62484 30.1986C8.25125 29.8873 8.12672 29.5137 8.12672 29.0779C8.12672 27.1477 8.12672 25.2175 8.12672 23.2873C8.06446 21.793 8.06445 20.4231 8.06445 19.0533Z"
                fill="#1E4164"
              />
              <path
                d="M9.37109 7.7832C9.62015 7.7832 9.80694 7.84547 9.99374 7.97C14.4768 10.4606 18.9598 12.9511 23.3805 15.504C23.5673 15.6285 23.5673 15.6908 23.4428 15.8153C22.4466 16.8115 21.4503 17.8077 20.4541 18.804C20.3296 18.9285 20.2673 18.9908 20.1428 18.804C16.5937 15.1926 13.0447 11.5813 9.43335 7.90773C9.43335 7.90773 9.43336 7.84547 9.37109 7.7832Z"
                fill="#1E4164"
              />
              <path
                d="M10.3672 29.9495C13.6049 26.6495 16.8427 23.4118 20.0804 20.1118C20.2672 19.925 20.3917 19.925 20.5785 20.1118C21.3879 20.9835 22.2596 21.7929 23.0691 22.6646C23.1936 22.7891 23.2559 22.8514 23.0068 22.9759C18.8351 25.2797 14.6634 27.5212 10.4917 29.825C10.4295 29.8872 10.3672 29.9495 10.3672 29.9495Z"
                fill="#1E4164"
              />
              <path
                d="M28.8601 19.1155C28.8601 19.4891 28.6733 19.7382 28.4242 19.9249C28.2374 20.0495 27.9884 20.174 27.8016 20.2985C26.5563 20.9834 25.2488 21.6683 24.0035 22.4155C23.8167 22.54 23.7544 22.4778 23.5676 22.3533C22.6959 21.4193 21.762 20.4853 20.8903 19.6136C20.7657 19.4891 20.7657 19.4268 20.8903 19.3023C21.9488 18.2438 23.0072 17.1853 24.0657 16.1891C24.1903 16.0646 24.2525 16.0646 24.4393 16.1268C25.6846 16.8117 26.9299 17.4966 28.1752 18.2438C28.5488 18.3683 28.8601 18.6797 28.8601 19.1155Z"
                fill="#1E4164"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-3" style={{ flexWrap: "wrap" }}>
        <p className=" px-0 py-2 ">© Copyright 2024 - canvas.</p>
        <div className=" flex" style={{ flexWrap: "wrap" }}>
          {navigation.map((item) => (
            <a
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className=" 'text-dark hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
