import React from "react";
import style from "./table.module.css";
import { map } from "lodash";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/fa/eye";
import { edit } from "react-icons-kit/fa/edit";
import { trash } from "react-icons-kit/fa/trash";

const Table = ({ headers, data, modal_id, onRemove, onEdit, onVisualize }) => {
  const renderHeader = () => {
    const rederedHeaders = map(headers, (header, index) => {
      return <th scope="col">{header}</th>;
    });

    if (rederedHeaders.length) {
      rederedHeaders.push(<th scope="col"></th>);
      rederedHeaders.push(<th scope="col"></th>);
      rederedHeaders.push(<th scope="col"></th>);
    }

    return rederedHeaders;
  };

  const renderBody = () => {
    return map(data, (value, index) => {
      const tds = map(Object.keys(value), (key, code) => {
        return <td>{value[key]}</td>;
      });

      return (
        <tr key={index}>
          {tds}
          <td>
            <span
              className={style.btn_table}
              onClick={() => {
                onVisualize?.(value);
              }}
            >
              <Icon size={20} icon={eye} />
            </span>
          </td>
          <td data-toggle="modal" data-target={modal_id}>
            <span
              className={style.btn_table}
              onClick={() => {
                onEdit?.(value);
              }}
            >
              <Icon size={20} icon={edit} />
            </span>
          </td>
          <td>
            <span
              className={style.btn_table}
              onClick={() => {
                onRemove?.(value);
              }}
            >
              <Icon size={20} icon={trash} />
            </span>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className={"table-responsive"}>
      <table className="table">
        <thead className="thead-dark">
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </div>
  );
};

export default Table;
