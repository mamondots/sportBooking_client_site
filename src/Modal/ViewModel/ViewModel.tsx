/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Button, Modal } from "antd";
import { FaEye } from "react-icons/fa";
const ViewModel = ({ facilite }: { facilite: any }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        className="p-2 text-base cursor-pointer rounded hover:bg-[#1677FF] hover:text-[#fff] duration-300 border"
        onClick={showModal}
      >
        <FaEye />
      </Button>
      <Modal open={isModalOpen} footer={null} onCancel={handleCancel}>
        <h2 className="text-lg font-semibold py-2">
          Name: <span className="text-base font-normal">{facilite.name}</span>
        </h2>
        <img className="rounded" src={facilite.img} alt="" />
        <p className="text-lg font-semibold pt-2">
          Location:
          <span className="text-base font-normal">{facilite.location}</span>
        </p>

        <p className="text-lg font-semibold">
          Price Per Hour:
          <span className="text-base font-normal">
            ${facilite.pricePerHour}
          </span>
        </p>
        <p>{facilite.description}</p>
      </Modal>
    </>
  );
};

export default ViewModel;
