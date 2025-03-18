import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <>
 
        <div className={`background ${styles.footer}`}>
          <div className={styles.icons}>
            <div>FaceBook</div>
            <div>Instagram</div>
            <div>TikTok</div>
            <div>YouTube</div>
          </div>
          <div className={styles.copyright}>© Copyright 2025</div>
        </div>
        {/*  Facebook link (Add clickable Icon)(https://www.facebook.com/profile.php?id=61573794903044) 
         Instagram link (https://www.instagram.com/midknightscares?igsh=MTlqbHZxa2Jxd3FwcA%3D%3D&utm_source=qr)
        TikTok link (https://www.tiktok.com/@midknightscares?_t=ZP-8uPGPMelD9q&_r=1) 
        YouTube link (https://youtube.com/@midknightscare?si=D0HHzEHpm1rlCBLl) */}
      
    </>
  );
}
