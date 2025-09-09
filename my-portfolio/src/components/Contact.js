import React from 'react';

function Contact() {
  return (
    <div className="card contact-card">
      <h2>Contact</h2>
      <p lang="vi"><strong>Location:</strong> Bình Chánh, Hồ Chí Minh</p>
      <p><strong>Email:</strong> <a href="mailto:tuankietnguyen113@gmail.com">tuankietnguyen113@gmail.com</a></p>
      <p><strong>GitHub:</strong> <a href="https://github.com/Nguyen-Tuan-Kiet27" target="_blank" rel="noreferrer">github.com/Nguyen-Tuan-Kiet27</a></p>
      <div style={{ marginTop: "16px" }}>
        <a 
            href="/CV_NguyenTuanKiet.pdf" 
            download="CV_NguyenTuanKiet.pdf" 
            class="download-btn"
            aria-label="Download CV Nguyễn Tuấn Kiệt PDF"
        >
            Download CV (PDF)
        </a>
      </div>
      
    </div>
  );
}

export default Contact;
