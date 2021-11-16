import React, { useState } from "react";
import { ModalCommentStyle } from "./styles";
import { FaTimes } from "react-icons/fa";
import Button from "../button";
import { UseAuth } from "../../providers/authProvider";
import { useCalendar } from "../../providers/calendarProvider";
import { useParams } from "react-router";

export default function ModalComment() {
  const { createComment } = useCalendar();
  const [newComment, setNewComment] = useState("");
  const [newScore, setNewScore] = useState(0);
  const { accessToken, user } = UseAuth();
  const { id }: any = useParams();
  const { show, setShow } = useCalendar();

  return (
    <ModalCommentStyle>
      <div>
        <FaTimes onClick={() => setShow(!show)} />
        <textarea
          placeholder="Seu comentário..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <input
          placeholder="Sua Nota"
          value={newScore}
          onChange={(e) => setNewScore(Number(e.target.value))}
        ></input>
        <Button
          onClick={() =>
            createComment(newComment, newScore, id, accessToken, user.name)
          }
        >
          Comentar
        </Button>
      </div>
    </ModalCommentStyle>
  );
}
