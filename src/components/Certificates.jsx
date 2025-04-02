import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({ index, title, image, link }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="w-full sm:w-[360px]">
            <Tilt
                options={{ max: 45, scale: 1, speed: 450 }}
                className="bg-tertiary p-5 rounded-2xl w-full"
            >
                <div className="relative w-full h-[230px]">
                    <a href={link} target="_blank">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full sm:object-contain rounded-md"
                    />
                    </a>
                </div>

                <div className="mt-5 h-[100px]">
                    <h3 className="text-white font-bold text-[24px]">{title}</h3>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-300 hover:text-green-500"
                    >
                        Verify Certificate ↗
                    </a>
                </div>
            </Tilt>
        </motion.div>
    );
};

const Certificates = () => {
    return (
        <div className="px-5 sm:px-10 md:px-20 lg:px-32" id="certificates">
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>My Certifications</p>
                <h2 className={`${styles.sectionHeadText}`}>Certificates.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Below are the certifications I have earned, demonstrating my knowledge and
                    proficiency in various technologies.
                </motion.p>
            </div>

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7 justify-items-center">
                {certificates.map((cert, index) => (
                    <CertificateCard key={`cert-${index}`} index={index} {...cert} />
                ))}
            </div>
        </div>
    );
};

export default Certificates;
