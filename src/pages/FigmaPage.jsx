
import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Rect, Circle, Text, Image, Transformer } from "react-konva";

// Custom hook to load images
const useImage = (url) => {
  const [image, setImage] = useState(null);
  useEffect(() => {
    const img = new window.Image();
    img.src = url;
    img.crossOrigin = "Anonymous"; // avoid CORS issues
    img.onload = () => setImage(img);
  }, [url]);
  return image;
};

// Component to render Image element
const ImageElement = ({ el, handleSelect, handleDragMove }) => {
  const img = useImage(el.src);
  if (!img) return null;
  return (
    <Image
      key={el.id}
      id={el.id.toString()}
      image={img}
      x={el.x}
      y={el.y}
      width={el.width}
      height={el.height}
      draggable
      onClick={() => handleSelect(el.id)}
      onDragMove={(e) => handleDragMove(e, el.id)}
    />
  );
};

const FigmaPage = () => {
  const stageRef = useRef();
  const trRef = useRef();

  const [elements, setElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  // Responsive Stage size
  const [stageSize, setStageSize] = useState({
    width: window.innerWidth - 512,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setStageSize({ width: window.innerWidth - 512, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add element functions
  const addRectangle = () => {
    const newEl = {
      id: Date.now(),
      type: "rectangle",
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      fill: "#3498db",
    };
    setElements([...elements, newEl]);
  };

  const addCircle = () => {
    const newEl = {
      id: Date.now(),
      type: "circle",
      x: 150,
      y: 150,
      radius: 50,
      fill: "#e74c3c",
    };
    setElements([...elements, newEl]);
  };

  const addText = () => {
    const newEl = {
      id: Date.now(),
      type: "text",
      x: 200,
      y: 200,
      text: "New Text",
      fontSize: 24,
      fill: "#2c3e50",
    };
    setElements([...elements, newEl]);
  };

  const addImage = (url) => {
    const newEl = {
      id: Date.now(),
      type: "image",
      x: 100,
      y: 100,
      width: 150,
      height: 150,
      src: url,
    };
    setElements([...elements, newEl]);
  };

  // Selection and Drag
  const handleSelect = (id) => setSelectedId(id);
  const handleDragMove = (e, id) => {
    const { x, y } = e.target.position();
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, x, y } : el))
    );
  };

  // Transformer
  useEffect(() => {
    if (selectedId) {
      const stage = stageRef.current;
      const selectedNode = stage.findOne(`#${selectedId}`);
      if (selectedNode) {
        trRef.current.nodes([selectedNode]);
        trRef.current.getLayer().batchDraw();
      }
    }
  }, [selectedId]);

  // Change Fill color
  const handleChangeFill = (color) => {
    setElements((prev) =>
      prev.map((el) => (el.id === selectedId ? { ...el, fill: color } : el))
    );
  };

  // Change Text
  const handleTextChange = (text) => {
    setElements((prev) =>
      prev.map((el) => (el.id === selectedId ? { ...el, text } : el))
    );
  };

  // Delete element
  const handleDelete = () => {
    setElements((prev) => prev.filter((el) => el.id !== selectedId));
    setSelectedId(null);
  };

  return (
    <div className="flex h-screen">
      {/* Left Toolbar */}
      <div className="w-64 bg-gray-200 p-4 flex flex-col gap-2">
        <h3 className="font-bold mb-2">Toolbar</h3>
        <button onClick={addRectangle} className="p-2 bg-white rounded shadow">
          Add Rectangle
        </button>
        <button onClick={addCircle} className="p-2 bg-white rounded shadow">
          Add Circle
        </button>
        <button onClick={addText} className="p-2 bg-white rounded shadow">
          Add Text
        </button>
        <button
          onClick={() => addImage("https://via.placeholder.com/150")}
          className="p-2 bg-white rounded shadow"
        >
          Add Image
        </button>
        <button
          onClick={handleDelete}
          className="p-2 bg-red-500 text-white rounded shadow"
        >
          Delete
        </button>
      </div>

      {/* Canvas */}
      <div className="flex-1 bg-white">
        <Stage width={stageSize.width} height={stageSize.height} ref={stageRef}>
          <Layer>
            {elements.map((el) => {
              if (el.type === "rectangle")
                return (
                  <Rect
                    key={el.id}
                    id={el.id.toString()}
                    {...el}
                    draggable
                    onClick={() => handleSelect(el.id)}
                    onDragMove={(e) => handleDragMove(e, el.id)}
                  />
                );
              if (el.type === "circle")
                return (
                  <Circle
                    key={el.id}
                    id={el.id.toString()}
                    {...el}
                    draggable
                    onClick={() => handleSelect(el.id)}
                    onDragMove={(e) => handleDragMove(e, el.id)}
                  />
                );
              if (el.type === "text")
                return (
                  <Text
                    key={el.id}
                    id={el.id.toString()}
                    {...el}
                    draggable
                    onClick={() => handleSelect(el.id)}
                    onDragMove={(e) => handleDragMove(e, el.id)}
                  />
                );
              if (el.type === "image") {
                return (
                  <ImageElement
                    key={el.id}
                    el={el}
                    handleSelect={handleSelect}
                    handleDragMove={handleDragMove}
                  />
                );
              }
              return null;
            })}

            {/* Transformer */}
            {selectedId && <Transformer ref={trRef} keepRatio={false} rotateEnabled />}
          </Layer>
        </Stage>
      </div>

      {/* Right Sidebar */}
      <div className="w-64 bg-gray-200 p-4 flex flex-col gap-4">
        <h3 className="font-bold mb-2">Properties</h3>
        {selectedId ? (
          <>
            <label htmlFor="fill-color-input">Fill Color:</label>
            <input
              id="fill-color-input"
              type="color"
              onChange={(e) => handleChangeFill(e.target.value)}
            />

            {elements.find((el) => el.id === selectedId)?.type === "text" && (
              <>
                <label htmlFor="text-input">Text:</label>
                <input
                  id="text-input"
                  type="text"
                  onChange={(e) => handleTextChange(e.target.value)}
                  defaultValue={elements.find((el) => el.id === selectedId)?.text}
                />
              </>
            )}
          </>
        ) : (
          <p>Select an element to edit</p>
        )}
      </div>
    </div>
  );
};

export default FigmaPage;
