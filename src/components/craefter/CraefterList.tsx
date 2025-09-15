import {
  Craefter as CraefterObj,
  Craefters,
} from "@craeft/engine/dist/craefter";
import { CraefterTypes } from "@craeft/engine/dist/data";
import { Resources } from "@craeft/engine/dist/game";
import { Item } from "@craeft/engine/dist/items";
import React, { use, useState } from "react";
import AddCraeftersWindow from "../dialogs/AddCraeftersWindow";

import CraeftingWindow from "../dialogs/CraeftingWindow";
import Modal from "../utility/Modal";
import Craefter from "./Craefter";

import CraefterIcon from "./CraefterIcon";
import { CraeftContext } from "../../provider/CraeftProvider";

interface CraefterListProps {
  readonly craefters: Craefters;
  readonly resources: Resources;
}

export default function CraefterList({
  craefters,
  resources,
}: CraefterListProps) {
  const { craeft } = use(CraeftContext);

  const [isCraeftingDialogShown, setIsCraeftingDialogShown] =
    useState<boolean>(false);
  const [isAddCraefterDialogShown, setIsAddCraefterDialogShown] =
    useState<boolean>(false);
  const [selectedCraefter, setSelectedCraefter] = useState<
    CraefterObj | undefined
  >();

  const hasEnoughResources = () => {
    return resources.sum() > 0;
  };

  const openCraefterDialog = () => {
    setIsAddCraefterDialogShown(true);
  };

  const openCraeftDialog = (craefter?: CraefterObj) => {
    setIsCraeftingDialogShown(true);
    setSelectedCraefter(craefter);
  };

  const addCraefter = (craefter: CraefterTypes) => {
    craeft.addCraefter(craefter);
    setIsAddCraefterDialogShown(false);
  };

  const addItem = (item: Item, resourcesConsumed: Resources) => {
    if (selectedCraefter) {
      craeft.addItem(item, resourcesConsumed);

      setSelectedCraefter(undefined);
      setIsCraeftingDialogShown(false);
    }
  };

  const onCraefterSelect = (craefter: CraefterObj) => {
    setSelectedCraefter((prevState) => {
      let selectedCraefter = prevState === craefter ? undefined : craefter;

      if (craefter.isCraefting) {
        selectedCraefter = undefined;
      }

      return selectedCraefter;
    });
  };

  const bury = (craefter: CraefterObj) => {
    const name = craeft.craefters.bury(craefter);

    craeft.logs.push(`Cräfter "${name}" was buried!`);
    craeft.update();

    setSelectedCraefter(undefined);
  };

  return (
    <div className="craefters column frame">
      <div className="rpgui-container framed">
        {selectedCraefter && isCraeftingDialogShown ? (
          <Modal
            isActive={isCraeftingDialogShown}
            onClose={() => setIsCraeftingDialogShown(false)}
          >
            <CraeftingWindow
              availableResources={resources}
              craefter={selectedCraefter}
              itemAdded={addItem}
            />
          </Modal>
        ) : null}

        {isAddCraefterDialogShown ? (
          <Modal
            isActive={isAddCraefterDialogShown}
            onClose={() => setIsAddCraefterDialogShown(false)}
          >
            <AddCraeftersWindow addCraefter={addCraefter} />
          </Modal>
        ) : null}

        <div className="row">
          <strong>Cräfter</strong>
          <hr />
        </div>

        {!selectedCraefter?.isCraefting ? (
          <Craefter
            craefter={selectedCraefter}
            openCraeftDialog={openCraeftDialog}
            bury={bury}
            canCraeft={hasEnoughResources()}
          />
        ) : null}

        {craefters.map((craefter: CraefterObj, index: number) => {
          return (
            <CraefterIcon
              key={`${craefter.id}-${index}`}
              craefter={craefter}
              isSelected={
                selectedCraefter === craefter && !selectedCraefter?.isCraefting
              }
              onCraefterSelect={onCraefterSelect}
            />
          );
        })}

        <div className="row">
          <button
            onClick={openCraefterDialog}
            type="button"
            className="rpgui-button is-small"
          >
            <span className="icon">
              <i className="fas fa-plus" />
            </span>

            <span>&nbsp;Add Cräfter</span>
          </button>
        </div>
      </div>
    </div>
  );
}
