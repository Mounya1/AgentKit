const flowConfig = {
  "id": "c4d9b467-f4fa-4bbf-97e9-8b89f9b386c2",
  "name": "My First Flow",
  "edges": [
    {
      "id": "triggerNode_1-LLMNode_875",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "LLMNode_875",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "LLMNode_875-graphqlResponseNode_558",
      "type": "defaultEdge",
      "source": "LLMNode_875",
      "target": "graphqlResponseNode_558",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-graphqlResponseNode_558",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "graphqlResponseNode_558",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    }
  ],
  "status": "active",
  "created_at": "2026-07-15T22:49:45.101981+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "nodeId": "graphqlNode",
        "values": {
          "nodeName": "API Request",
          "responeType": "realtime",
          "advance_schema": "{\n  \"topic\": \"string\"\n}"
        },
        "trigger": true
      },
      "type": "triggerNode",
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "LLMNode_875",
      "data": {
        "nodeId": "LLMNode",
        "values": {
          "tools": [],
          "prompts": [
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
              "role": "system",
              "content": "Give me short \\(two\\-three liner\\) insights on the topic : {{triggerNode_1.output.topic}}"
            }
          ],
          "memories": "[]",
          "messages": "[]",
          "nodeName": "Generate Text",
          "generativeModelName": {}
        }
      },
      "type": "dynamicNode",
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "graphqlResponseNode_558",
      "data": {
        "nodeId": "graphqlResponseNode",
        "values": {
          "nodeName": "API Response",
          "outputMapping": "{\n  \"tweet\": \"{{LLMNode_875.output.generatedResponse}}\"\n}"
        }
      },
      "type": "dynamicNode",
      "position": {
        "x": 0,
        "y": 0
      }
    }
  ]
};

export async function getNodesAndEdges(): Promise<{
    nodes: Record<string, any>[],
    edges: Record<string, any>[],
}> {
    return {
        nodes: flowConfig.nodes,
        edges: flowConfig.edges,
    }
}

export async function getFlowConfig(): Promise<Record<string, any>> {
    return flowConfig;
}