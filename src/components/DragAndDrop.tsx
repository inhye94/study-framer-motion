import {
  css,
  type CSSObject,
  type Interpolation,
  type Theme,
} from "@emotion/react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  type DropResult,
} from "@hello-pangea/dnd";

const reorder = (list: unknown[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

interface IDragAndDropWrapperProps {
  id: string;
  list: unknown[];
  onDragEnd: React.Dispatch<React.SetStateAction<string[]>>;
  customStyles: (isDragging: boolean) => Interpolation<Theme>;
  children: React.ReactNode;
}

function DragAndDrop({
  id,
  list,
  onDragEnd,
  customStyles,
  children,
}: IDragAndDropWrapperProps) {
  const handleDragEnd = (result: DropResult<string>) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      list,
      result.source.index,
      result.destination.index
    ) as string[];

    onDragEnd(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            css={customStyles(snapshot.isDraggingOver)}
          >
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

interface IDragAndDropItem {
  id: string;
  index: number;
  customStyles: (isDragging: boolean) => CSSObject;
  children: React.ReactNode;
}

function IDragAndDropItem({
  id,
  index,
  customStyles,
  children,
}: IDragAndDropItem) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          css={css({
            ...customStyles(snapshot.isDragging),
            ...provided.draggableProps.style,
          })}
        >
          {children}
        </div>
      )}
    </Draggable>
  );
}

DragAndDrop.Group = DragAndDrop;
DragAndDrop.Item = IDragAndDropItem;

export default DragAndDrop;
