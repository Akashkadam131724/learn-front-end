import React, { useState } from "react";

// Linked List Node Class
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

const LinkedListNavigation = () => {
  const [head, setHead] = useState(null); // The head of the linked list
  const [currentNode, setCurrentNode] = useState(null); // Current node in view

  // Add a new state to the history
  const addState = (data) => {
    const newNode = new Node(data);
    if (head === null) {
      setHead(newNode);
      setCurrentNode(newNode);
    } else {
      newNode.prev = currentNode;
      if (currentNode) currentNode.next = newNode;
      setCurrentNode(newNode);
    }
  };

  // Navigate backward
  const goBack = () => {
    if (currentNode && currentNode.prev) {
      setCurrentNode(currentNode.prev);
    }
  };

  // Navigate forward
  const goForward = () => {
    if (currentNode && currentNode.next) {
      setCurrentNode(currentNode.next);
    }
  };

  // Insert a new state at a specific index
  const insertAtIndex = (data, index) => {
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = head;
      if (head) head.prev = newNode;
      setHead(newNode);
      setCurrentNode(newNode);
      return;
    }

    let currentNode = head;
    let currentIndex = 0;
    while (currentNode !== null && currentIndex < index - 1) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (currentNode === null) {
      throw new Error("Index out of bounds");
    }

    newNode.next = currentNode.next;
    newNode.prev = currentNode;
    if (currentNode.next) currentNode.next.prev = newNode;
    currentNode.next = newNode;
    if (newNode.next === null) setCurrentNode(newNode); // Move to the new node if inserted at the end
  };

  // Delete a state
  const deleteNode = (nodeToDelete) => {
    if (nodeToDelete === head) {
      setHead(nodeToDelete.next);
      if (head) head.prev = null;
      setCurrentNode(head);
    } else {
      if (nodeToDelete.prev) nodeToDelete.prev.next = nodeToDelete.next;
      if (nodeToDelete.next) nodeToDelete.next.prev = nodeToDelete.prev;
      if (nodeToDelete === currentNode) setCurrentNode(nodeToDelete.prev);
    }
  };

  // Example usage
  React.useEffect(() => {
    addState("View 1");
    addState("View 2");
    addState("View 3");
  }, []);

  return (
    <div>
      <button onClick={() => addState(`View ${Math.random()}`)}>
        Add State
      </button>
      <button onClick={goBack} disabled={!currentNode?.prev}>
        Back
      </button>
      <button onClick={goForward} disabled={!currentNode?.next}>
        Forward
      </button>
      <button onClick={() => insertAtIndex(`Inserted ${Math.random()}`, 1)}>
        Insert at Index 1
      </button>
      <button onClick={() => deleteNode(currentNode)}>
        Delete Current Node
      </button>
      <div>
        <h1>Current View: {currentNode?.data || "No View"}</h1>
      </div>
    </div>
  );
};

export default LinkedListNavigation;
