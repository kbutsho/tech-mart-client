import styles from '@/styles/Login.module.css'
import Image from 'next/image';
import React from 'react';
import login from '@/assets/login/login-main.png'
const Login = () => {
    return (
        <div className={styles.login_area}>
            <div className={styles.container}>
                <div className={`${styles.main_area}`}>
                    <div className={`${styles.image_area}`}>
                        <Image src={login} width={720} height={520} alt="img" className={styles.image} />
                    </div>
                    <div className={`${styles.form_area}`}>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;