import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShare, FaBookmark } from "react-icons/fa";

const Five = () => {
  const navigate = useNavigate();

  // Similar blog data
  const similarBlogs = [
    {
      id: 1,
      title: "Microservices with Golang and gRPC",
      tags: ["golang", "microservices", "grpc"],
      image:
        "https://th.bing.com/th/id/R.796523382777357d18ba619048335003?rik=hi%2f%2bPd07IRqj%2fA&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      title: "CQRS Pattern Implementation in Go",
      tags: ["golang", "cqrs", "design-patterns"],
      image:
        "https://th.bing.com/th/id/R.796523382777357d18ba619048335003?rik=hi%2f%2bPd07IRqj%2fA&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      title: "Concurrency Patterns in Go: Advanced Techniques",
      tags: ["golang", "concurrency", "patterns"],
      image:
        "https://th.bing.com/th/id/R.796523382777357d18ba619048335003?rik=hi%2f%2bPd07IRqj%2fA&pid=ImgRaw&r=0",
    },
  ];

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="blog-container">
      <article className="blog-post">
        <nav className="blog-navigation">
          <button onClick={() => navigate(-1)} className="blog-back-button">
            <FaArrowLeft /> Back to blogs
          </button>
        </nav>

        <header className="blog-header">
          <h1 className="blog-title">
            Building Event-Driven Architectures with Golang
          </h1>
          <p className="blog-description">
            A comprehensive guide to creating scalable, resilient systems using
            Go's concurrency features and event-driven design patterns
          </p>
          <div className="blog-meta">
            <span className="blog-timestamp">March 4, 2025</span>
            <span className="blog-category">Backend</span>
            <span className="blog-reading-time">12 min read</span>
          </div>
        </header>

        <div className="blog-featured-image-container">
          <img
            src="https://iconlogovector.com/uploads/images/2024/04/md-6619d74e0c9e1-GO-Golang.webp"
            alt="Golang code on screen with event flow diagram"
            className="blog-featured-image"
          />
        </div>

        <div className="blog-content">
          <p>
            Event-driven architecture (EDA) has become a cornerstone of modern,
            distributed systems design. By decoupling components and enabling
            asynchronous communication, EDA allows for building highly scalable,
            resilient, and maintainable applications. Go's concurrency
            primitives, lightweight goroutines, and robust standard library make
            it an excellent choice for implementing event-driven systems.
          </p>

          <h2>What is Event-Driven Architecture?</h2>

          <p>
            At its core, event-driven architecture is a design paradigm where
            components communicate through events – notifications that something
            significant has happened. These events trigger reactions in other
            parts of the system without direct coupling between the event
            producer and consumer.
          </p>

          <blockquote>
            "Event-driven architecture promotes loose coupling, scalability, and
            resilience – three critical requirements for modern distributed
            systems."
          </blockquote>

          <p>The key components of an event-driven architecture include:</p>

          <ul>
            <li>Event producers – components that generate events</li>
            <li>Event consumers – components that react to events</li>
            <li>
              Event channels – the medium through which events are transmitted
            </li>
            <li>
              Event processors – optional components that transform events
            </li>
          </ul>

          <h2>Go's Concurrency Model and EDA</h2>

          <p>
            Golang's concurrency model, based on CSP (Communicating Sequential
            Processes), provides a natural fit for event-driven architectures.
            Goroutines (lightweight threads) and channels (typed conduits for
            sending and receiving values) form the foundation for building
            efficient event processing systems.
          </p>

          <div className="code-block">
            <pre>
              <code>{`package main

import (
	"fmt"
	"time"
)

// SystemEvent represents a system event
type SystemEvent struct {
	ID        string
	Type      string
	Payload   interface{}
	Timestamp time.Time
}

func main() {
	// Create an event channel
	eventChannel := make(chan SystemEvent, 100)
	
	// Start event consumers
	for i := 0; i < 3; i++ {
		go eventConsumer(i, eventChannel)
	}
	
	// Produce events
	for i := 0; i < 10; i++ {
		eventChannel <- SystemEvent{
			ID:        fmt.Sprintf("evt-%d", i),
			Type:      "user.created",
			Payload:   fmt.Sprintf("User %d", i),
			Timestamp: time.Now(),
		}
		time.Sleep(500 * time.Millisecond)
	}
	
	// Wait for all events to be processed
	time.Sleep(3 * time.Second)
}

func eventConsumer(id int, events <-chan SystemEvent) {
	for event := range events {
		fmt.Printf("Consumer %d processing event %s: %v\\n", 
			id, event.ID, event.Payload)
		// Simulate processing time
		time.Sleep(1 * time.Second)
	}
}`}</code>
            </pre>
          </div>

          <p>
            In this simple example, we create a basic event-driven system using
            Go's channels. Multiple consumers process events concurrently,
            demonstrating the power of Go's concurrency model for event
            processing.
          </p>

          <h2>Building a Robust Event Bus</h2>

          <p>
            For more complex applications, we need a more sophisticated event
            bus that can:
          </p>

          <ol>
            <li>Support multiple event types</li>
            <li>Allow dynamic subscription to specific event types</li>
            <li>Provide reliable delivery semantics</li>
            <li>Handle errors gracefully</li>
          </ol>

          <p>Let's build a simple but powerful event bus in Go:</p>

          <div className="code-block">
            <pre>
              <code>{`package eventbus

import (
	"context"
	"sync"
)

// EventBus manages the distribution of events
type EventBus struct {
	subscribers map[string][]chan interface{}
	mutex       sync.RWMutex
}

// NewEventBus creates a new event bus
func NewEventBus() *EventBus {
	return &EventBus{
		subscribers: make(map[string][]chan interface{}),
	}
}

// Subscribe registers a subscriber for a specific event type
func (eb *EventBus) Subscribe(eventType string, bufferSize int) <-chan interface{} {
	eb.mutex.Lock()
	defer eb.mutex.Unlock()
	
	ch := make(chan interface{}, bufferSize)
	eb.subscribers[eventType] = append(eb.subscribers[eventType], ch)
	
	return ch
}

// Publish sends an event to all subscribers of the given event type
func (eb *EventBus) Publish(eventType string, event interface{}) {
	eb.mutex.RLock()
	defer eb.mutex.RUnlock()
	
	if subscribers, exists := eb.subscribers[eventType]; exists {
		for _, ch := range subscribers {
			// Non-blocking send
			select {
			case ch <- event:
			default:
				// Channel is full, log or handle accordingly
			}
		}
	}
}

// PublishWithContext sends an event with context for cancellation
func (eb *EventBus) PublishWithContext(ctx context.Context, 
                                       eventType string, 
                                       event interface{}) error {
	eb.mutex.RLock()
	defer eb.mutex.RUnlock()
	
	if subscribers, exists := eb.subscribers[eventType]; exists {
		for _, ch := range subscribers {
			select {
			case ch <- event:
			case <-ctx.Done():
				return ctx.Err()
			default:
				// Channel is full, skip or handle
			}
		}
	}
	
	return nil
}

// Unsubscribe removes a subscriber channel
func (eb *EventBus) Unsubscribe(eventType string, ch <-chan interface{}) {
	eb.mutex.Lock()
	defer eb.mutex.Unlock()
	
	if subscribers, exists := eb.subscribers[eventType]; exists {
		for i, subscriber := range subscribers {
			if subscriber == ch {
				// Remove this subscriber
				eb.subscribers[eventType] = append(
					subscribers[:i], 
					subscribers[i+1:]...
				)
				close(subscriber)
				break
			}
		}
	}
}`}</code>
            </pre>
          </div>

          <p>This event bus implementation provides:</p>

          <ul>
            <li>Type-based subscription with buffered channels</li>
            <li>
              Non-blocking publication to prevent slow consumers from affecting
              publishers
            </li>
            <li>Context support for timeout and cancellation</li>
            <li>Thread-safe operations using read-write mutex</li>
          </ul>

          <h2>Connecting to External Message Brokers</h2>

          <p>
            In production systems, you'll often connect your Go service to
            external message brokers like Kafka, RabbitMQ, or NATS for more
            robust event distribution. Go's ecosystem offers excellent client
            libraries for these technologies.
          </p>

          <p>
            Here's an example of connecting to NATS with the official Go client:
          </p>

          <div className="code-block">
            <pre>
              <code>{`package main

import (
	"log"
	"time"

	"github.com/nats-io/nats.go"
)

func main() {
	// Connect to NATS
	nc, err := nats.Connect(nats.DefaultURL)
	if err != nil {
		log.Fatal(err)
	}
	defer nc.Close()

	// Create a JetStream context
	js, err := nc.JetStream()
	if err != nil {
		log.Fatal(err)
	}

	// Create a stream
	_, err = js.AddStream(&nats.StreamConfig{
		Name:     "EVENTS",
		Subjects: []string{"events.>"},
	})
	if err != nil {
		log.Fatal(err)
	}

	// Subscribe to events
	sub, err := js.SubscribeSync("events.user.created")
	if err != nil {
		log.Fatal(err)
	}

	// Start event consumer
	go func() {
		for {
			msg, err := sub.NextMsg(time.Hour)
			if err != nil {
				log.Println("Error receiving message:", err)
				continue
			}
			
			log.Printf("Received event: %s", string(msg.Data))
			msg.Ack()
		}
	}()

	// Publish events
	for i := 0; i < 10; i++ {
		_, err := js.Publish("events.user.created", 
			[]byte("User created event payload"))
		if err != nil {
			log.Println("Error publishing event:", err)
		}
		time.Sleep(time.Second)
	}

	// Wait to ensure messages are processed
	time.Sleep(5 * time.Second)
}`}</code>
            </pre>
          </div>

          <h2>Handling Failures in Event-Driven Systems</h2>

          <p>
            Failure handling is a critical aspect of event-driven architectures.
            Go provides several patterns for building resilient event
            processing:
          </p>

          <h3>1. Retry with Backoff</h3>

          <div className="code-block">
            <pre>
              <code>{`func processEventWithRetry(event SystemEvent) error {
	backoff := 100 * time.Millisecond
	maxRetries := 5
	
	for attempt := 0; attempt < maxRetries; attempt++ {
		err := processEvent(event)
		if err == nil {
			return nil
		}
		
		// Exponential backoff
		time.Sleep(backoff)
		backoff *= 2
	}
	
	return fmt.Errorf("failed to process event after %d attempts", maxRetries)
}`}</code>
            </pre>
          </div>

          <h3>2. Circuit Breaker Pattern</h3>

          <div className="code-block">
            <pre>
              <code>{`type CircuitBreaker struct {
	failureThreshold uint
	resetTimeout     time.Duration
	state            uint32 // 0 = closed, 1 = open
	failures         uint
	lastFailure      time.Time
	mutex            sync.Mutex
}

func (cb *CircuitBreaker) Execute(fn func() error) error {
	if atomic.LoadUint32(&cb.state) == 1 {
		// Check if reset timeout has elapsed
		if time.Since(cb.lastFailure) > cb.resetTimeout {
			// Reset to half-open state
			atomic.StoreUint32(&cb.state, 0)
		} else {
			return errors.New("circuit breaker is open")
		}
	}
	
	err := fn()
	
	cb.mutex.Lock()
	defer cb.mutex.Unlock()
	
	if err != nil {
		cb.failures++
		cb.lastFailure = time.Now()
		
		if cb.failures >= cb.failureThreshold {
			atomic.StoreUint32(&cb.state, 1) // Open circuit
		}
		return err
	}
	
	// Success, reset failures
	cb.failures = 0
	return nil
}`}</code>
            </pre>
          </div>

          <h2>Event Sourcing with Go</h2>

          <p>
            Event sourcing is a powerful pattern where system state is derived
            from a sequence of events rather than storing current state
            directly. Go's strong typing and efficient serialization make it
            well-suited for implementing event sourcing.
          </p>

          <p>A basic event sourcing implementation might look like this:</p>

          <div className="code-block">
            <pre>
              <code>{`package eventsourcing

import (
	"encoding/json"
	"errors"
)

// DomainEvent represents a domain event
type DomainEvent struct {
	Type        string          \`json:"type"\`
	AggregateID string          \`json:"aggregate_id"\`
	Version     int             \`json:"version"\`
	Data        json.RawMessage \`json:"data"\`
}

// Aggregate is the base interface for all aggregates
type Aggregate interface {
	ID() string
	Version() int
	ApplyEvent(event DomainEvent) error
}

// EventStore defines the interface for storing and retrieving events
type EventStore interface {
	SaveEvents(aggregateID string, events []DomainEvent, expectedVersion int) error
	GetEvents(aggregateID string) ([]DomainEvent, error)
}

// Repository provides access to aggregates
type Repository struct {
	store         EventStore
	aggregateType func() Aggregate
}

// NewRepository creates a new Repository
func NewRepository(store EventStore, aggregateType func() Aggregate) *Repository {
	return &Repository{
		store:         store,
		aggregateType: aggregateType,
	}
}

// Load retrieves an aggregate by ID
func (r *Repository) Load(id string) (Aggregate, error) {
	events, err := r.store.GetEvents(id)
	if err != nil {
		return nil, err
	}
	
	if len(events) == 0 {
		return nil, errors.New("aggregate not found")
	}
	
	aggregate := r.aggregateType()
	
	for _, event := range events {
		if err := aggregate.ApplyEvent(event); err != nil {
			return nil, err
		}
	}
	
	return aggregate, nil
}

// Save persists new events for an aggregate
func (r *Repository) Save(aggregate Aggregate, newEvents []DomainEvent) error {
	return r.store.SaveEvents(aggregate.ID(), newEvents, aggregate.Version())
}`}</code>
            </pre>
          </div>

          <h2>Performance Considerations</h2>

          <p>
            When building event-driven systems with Go, keep these performance
            considerations in mind:
          </p>

          <ul>
            <li>
              <strong>Buffer sizes:</strong> Choose appropriate channel buffer
              sizes based on expected event volumes and processing rates
            </li>
            <li>
              <strong>Goroutine management:</strong> Avoid creating unbounded
              numbers of goroutines; use worker pools
            </li>
            <li>
              <strong>Event batching:</strong> For high-throughput systems,
              batch events for more efficient processing
            </li>
            <li>
              <strong>Serialization format:</strong> Choose the right
              serialization format for your use case (JSON, Protocol Buffers,
              etc.)
            </li>
            <li>
              <strong>Memory management:</strong> Be mindful of memory
              allocations in hot paths
            </li>
          </ul>

          <h2>Conclusion</h2>

          <p>
            Go's concurrency model, lightweight goroutines, and standard library
            make it an excellent choice for building event-driven architectures.
            By leveraging Go's channels for local event processing and
            connecting to external message brokers for distributed
            communication, you can create scalable, resilient systems that
            handle high throughput with low latency.
          </p>

          <p>
            Event-driven architecture in Go enables you to build systems that
            can evolve independently, scale horizontally, and remain resilient
            in the face of partial failures. Whether you're building
            microservices, streaming platforms, or real-time data processing
            systems, Go's event-driven patterns provide a solid foundation for
            your architecture.
          </p>
        </div>

        <div className="blog-author">
          <div className="blog-author-image">
            <img src="https://via.placeholder.com/60" alt="Author" />
          </div>
          <div className="blog-author-info">
            <h3>Sarah Chen</h3>
            <p>Senior Backend Engineer specializing in distributed systems</p>
          </div>
        </div>

        <footer className="blog-footer">
          <div className="blog-tags">
            <span>Golang</span>
            <span>Event-Driven</span>
            <span>Architecture</span>
            <span>Backend</span>
            <span>Concurrency</span>
          </div>
          <div className="blog-actions">
            <button className="blog-action-button">
              <FaBookmark /> Save
            </button>
            <button className="blog-action-button">
              <FaShare /> Share
            </button>
          </div>
        </footer>
      </article>

      {/* Similar Blogs Section */}
      <section className="similar-blogs-section">
        <h2 className="similar-blogs-title">Similar Articles</h2>
        <div className="similar-blogs-container">
          {similarBlogs.map((blog) => (
            <div
              key={blog.id}
              className="similar-blog-card"
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              <div className="similar-blog-image-container">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="similar-blog-image"
                />
              </div>
              <div className="similar-blog-content">
                <h3 className="similar-blog-title">{blog.title}</h3>
                <div className="similar-blog-tags">
                  {blog.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="similar-blog-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .blog-container {
          background-color: #000;
          color: #e0e0e0;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          padding: 0;
          min-height: 100vh;
        }

        .blog-post {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px 20px;
        }

        .blog-navigation {
          margin-bottom: 30px;
          z-index: 399;
        }

        .blog-back-button {
          background: none;
          border: none;
          color: #aaa;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          cursor: pointer;
          padding: 0;
          transition: color 0.2s ease;
        }

        .blog-back-button:hover {
          color: #fff;
        }

        .blog-header {
          margin-bottom: 40px;
          text-align: center;
        }

        .blog-title {
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 16px;
          background: linear-gradient(90deg, #ffffff, #cccccc);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .blog-description {
          font-size: 1.2rem;
          line-height: 1.5;
          max-width: 700px;
          margin: 0 auto 24px;
          color: #aaa;
        }

        .blog-meta {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          font-size: 0.9rem;
          color: #777;
          flex-wrap: wrap;
        }

        .blog-category,
        .blog-reading-time {
          background-color: #222;
          padding: 4px 12px;
          border-radius: 20px;
        }

        .blog-featured-image-container {
          margin: 30px 0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }

        .blog-featured-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.3s ease;
        }

        .blog-featured-image:hover {
          transform: scale(1.02);
        }

        .blog-content {
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .blog-content p {
          margin-bottom: 24px;
        }

        .blog-content h2 {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 40px 0 20px;
          color: #ffffff;
        }

        .blog-content h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin: 30px 0 15px;
          color: #ffffff;
        }

        .blog-content ul,
        .blog-content ol {
          margin-bottom: 24px;
          padding-left: 20px;
        }

        .blog-content li {
          margin-bottom: 8px;
        }

        blockquote {
          border-left: 4px solid #444444;
          padding-left: 20px;
          margin: 30px 0;
          font-style: italic;
          color: #bbb;
        }

        .code-block {
          background-color: #121212;
          border-radius: 8px;
          padding: 20px;
          margin: 25px 0;
          overflow-x: auto;
        }

        .code-block pre {
          margin: 0;
        }

        .code-block code {
          font-family: "Fira Code", monospace;
          font-size: 0.9rem;
          color: #cccccc;
        }

        .blog-author {
          display: flex;
          align-items: center;
          gap: 15px;
          margin: 50px 0 30px;
          padding: 20px;
          background-color: #111;
          border-radius: 8px;
        }

        .blog-author-image img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .blog-author-info h3 {
          margin: 0 0 5px 0;
          font-size: 1.1rem;
          color: #fff;
        }

        .blog-author-info p {
          margin: 0;
          font-size: 0.9rem;
          color: #aaa;
        }

        .blog-footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #222;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .blog-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .blog-tags span {
          background-color: #1a1a1a;
          color: #ffffff;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.8rem;
        }

        .blog-actions {
          display: flex;
          gap: 12px;
        }

        .blog-action-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: #222;
          color: #fff;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .blog-action-button:hover {
          background-color: #333;
        }

        /* Similar Blogs Section */
        .similar-blogs-section {
          max-width: 1000px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .similar-blogs-title {
          text-align: center;
          font-size: 2rem;
          color: #fff;
          margin-bottom: 40px;
        }

        .similar-blogs-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
        }

        .similar-blog-card {
          background-color: #111;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .similar-blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .similar-blog-image-container {
          width: 100%;
          height: 160px;
          overflow: hidden;
        }

        .similar-blog-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .similar-blog-card:hover .similar-blog-image {
          transform: scale(1.05);
        }

        .similar-blog-content {
          padding: 20px;
        }

        .similar-blog-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          margin-bottom: 15px;
          line-height: 1.4;
        }

        .similar-blog-tags {
          display: flex;
          gap: 8px;
        }

        .similar-blog-tag {
          font-size: 0.8rem;
          padding: 4px 8px;
          border-radius: 4px;
          background-color: #222;
          color: #aaa;
        }

        @media (max-width: 768px) {
          .blog-post {
            padding: 30px 15px;
          }

          .blog-title {
            font-size: 2.2rem;
          }

          .blog-description {
            font-size: 1.1rem;
          }

          .blog-content {
            font-size: 1rem;
          }

          .blog-footer {
            flex-direction: column;
            align-items: flex-start;
          }

          .similar-blogs-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Five;
