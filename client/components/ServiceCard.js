import Link from "next/link";
import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import styles from '../styles/components/services.module.css'
const ServiceCard = ({service}) => {
  return (
    <>
      <div style={{padding:"20px"}} className={styles.serviceCard}>
        <span className={styles.icon}>{service.icon}</span>
        <h2 className={styles.title}>{service.title}</h2>
        <h6 className={styles.text}>{service.text}</h6>
        <Link href="/">
        <div>
          <BsArrowRightCircle size={30} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default ServiceCard;
