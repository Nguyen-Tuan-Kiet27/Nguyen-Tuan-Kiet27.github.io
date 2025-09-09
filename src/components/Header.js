import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="name" lang="vi">Nguyễn Tuấn Kiệt</h1>
        <p className="role">Aspiring Backend Developer • Java | Node.js</p>
        {/* <p class="summary">
            Aspiring Backend Developer (Java, Node.js) — focused on building robust, scalable RESTful APIs and delivering production-ready backend services.
        </p> */}
      </div>
      <div className="header-right">
        <a href="mailto:tuankietnguyen113@gmail.com" className="link">tuankietnguyen113@gmail.com</a>
        <a href="https://github.com/Nguyen-Tuan-Kiet27" target="_blank" rel="noreferrer" className="link">github.com/Nguyen-Tuan-Kiet27</a>
      </div>
    </header>
  );
}

export default Header;
