import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BadgeDetails from "./BadgeDetails";

import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

import api from "../api";

const BadgeDetailsContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const params = useParams();
  const badgeId = params.badgeId;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.badges.read();
      const isBadge = response.filter((badge) => {
        if (badge.id === badgeId) {
          setData(badge);
          return true;
        }
        return false;
      });
      isBadge && setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const handleOpenModal = (e) => {
    setModalIsOpen(true);
  };
  const handleCloseModal = (e) => {
    setModalIsOpen(false);
  };

  const handleDeleteBadge = async (e) => {
    setLoading(true);
    setError(null);
    try {
      await api.badges.remove(badgeId);
      props.history.push("/badges");
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return (
    (loading && <PageLoading />) ||
    (error && <PageError error={error} />) || (
      <BadgeDetails
        onCloseModal={handleCloseModal}
        onOpenModal={handleOpenModal}
        modalIsOpen={modalIsOpen}
        onDeleteBadge={handleDeleteBadge}
        badge={data}
      />
    )
  );
};

export default BadgeDetailsContainer;
