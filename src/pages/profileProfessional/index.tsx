/* eslint-disable array-callback-return */
import { Calendar, Comments } from "./styles";
import Bar from "../../components/bar";
import Button from "../../components/button";
import CardComments from "../../components/CardComments";
import { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/pt-br";
import ModalComment from "../../components/modalComment";
import { FaRegClock } from "react-icons/fa";
import { useCalendar } from "../../providers/calendarProvider";
import { UseAuth } from "../../providers/authProvider";
import { useParams } from "react-router";
import { Line } from "../../components/dashboardCard/styles";
import ModalCommentAttendance from "../../components/modalCommentAttendance";
import CardProfessionalProf from "../../components/cardProfessionalProf";

const ProfileProfessional = () => {
  const { searchDate, searchComments, calendar, comments } = useCalendar();
  const { id }: any = useParams();
  const { accessToken, user } = UseAuth();
  const getProfessionalStorage = JSON.parse(
    localStorage.getItem("@tranqyl:prof") || ""
  );
  let professionalId = Number(id);
  let now = new Date();
  const { show, setShow } = useCalendar();
  const [showNewTime, setShowNewTime] = useState(false);
  const [date, setDate] = useState("");
  const [idTime, setIdTime] = useState("");

  const changeShow = () => {
    setShowNewTime(!showNewTime);
  };

  const change = (id: any, date: any) => {
    setIdTime(id);
    setDate(date);
  };

  useEffect(() => {
    searchDate(id, accessToken);
    searchComments(professionalId, accessToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  let ref: string[] = [];

  const formed = calendar
    .slice()
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? 1 : -1));

  const filters = formed.filter((item) => item.type === true);

  const areas = getProfessionalStorage[0].areas;
  const nameProf = getProfessionalStorage[0].name;
  const namePatient = user.name;

  console.log(ref);

  return (
    <>
      <Bar />
      <CardProfessionalProf professional={getProfessionalStorage[0]} />
      <Calendar>
        <div className="tittle">
          <p>Escolha seu horário</p>
        </div>
        <div className="container">
          {filters.length > 0 ? (
            <>
              {filters.map((item, index) => {
                if (
                  !ref.includes(moment(item.date).format("l")) &&
                  ref.push(moment(item.date).format("l")) &&
                  moment(now).format().replace(/\D/g, "") <=
                    moment(item.date).format().replace(/\D/g, "")
                ) {
                  return (
                    <div key={index} className="week">
                      <div className="day">
                        <p>{moment(item.date).format("ddd")}</p>
                      </div>
                      <div className="times">
                        {filters
                          .filter(
                            (f) =>
                              moment(f.date).format("l") ===
                              moment(item.date).format("l")
                          )
                          .map((m, secondIndex) => {
                            console.log(m.date);
                            return (
                              <div
                                key={secondIndex}
                                className="time"
                                onClick={() => {
                                  changeShow();
                                  change(m.id, m.date);
                                }}
                              >
                                <p>{moment(m.date).format("DD/MM/YYYY")}</p>
                                <span className="check">
                                  {moment(m.date).format("LT")}
                                </span>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  );
                }
              })}
            </>
          ) : (
            <div className="nothingHere">
              <FaRegClock />
              <h1>Não há horarios disponíveis com este especialista... </h1>
            </div>
          )}
        </div>
      </Calendar>
      <Comments>
        <h1>Comentários</h1>
        <Button onClick={() => setShow(!show)}>Criar comentário</Button>
        <div className="containerComment">
          {comments.map((item) => {
            return <CardComments comments={item} />;
          })}
          {show && <ModalComment />}
        </div>
      </Comments>
      <Line />
      {showNewTime && (
        <ModalCommentAttendance
          timeId={idTime}
          date={date}
          zoom={getProfessionalStorage[0].zoom}
          passwordZoom={getProfessionalStorage[0].passwordZoom}
          accessToken={accessToken}
          professionalId={professionalId}
          patientId={Number(user.id)}
          areas={areas}
          namePatient={namePatient}
          nameProf={nameProf}
          changeShow={changeShow}
        />
      )}
    </>
  );
};

export default ProfileProfessional;
