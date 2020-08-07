import React from "react";

import PageHeader from "../../Components/PageHeader";
import TeacherItem from "../../Components/TeacherItem";

import "./styles.css";


function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis. ">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matérias</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Matérias</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
      </main>
    </div>
  );
}

export default TeacherList;
