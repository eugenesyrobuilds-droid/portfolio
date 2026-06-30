export const orderToDeliveryFlow = `sequenceDiagram
    actor V as Visitor
    participant P as Platform
    participant AI as AI consultant
    actor SD as Studio director
    participant M as Email service
    actor C as Client

    V->>P: Opens the order page
    P->>AI: Starts a guided chat

    loop A short back and forth
        AI->>V: Asks one scoping question
        V->>AI: Answers
    end

    AI->>P: Produces a structured brief
    V->>P: Reviews and edits the summary
    V->>P: Submits the order

    P->>SD: Order appears in inbox
    P->>M: New order notification
    M->>SD: Email alert

    SD->>P: Reviews the details and accepts

    P->>P: Creates a new project and first task
    P->>P: Auto creates a client account<br/>with a temporary password
    P->>M: Welcome email with login details
    M->>C: Welcome email

    C->>P: Logs into the client portal
    P->>C: Shows the new project read only
`;
