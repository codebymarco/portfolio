import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShare, FaBookmark } from "react-icons/fa";

const KubernetesErrorsBlog = () => {
  const navigate = useNavigate();

  // Similar blog data
  const similarBlogs = [
    {
      id: 1,
      title: "Setting Up BunnyCDN with S3 and Edge Rules",
      tags: ["cdn", "aws", "performance"],
      image:
        "https://th.bing.com/th/id/R.796523382777357d18ba619048335003?rik=hi%2f%2bPd07IRqj%2fA&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      title: "How to Dockerize a React.js Application",
      tags: ["docker", "react", "devops"],
      image:
        "https://th.bing.com/th/id/R.796523382777357d18ba619048335003?rik=hi%2f%2bPd07IRqj%2fA&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      title: "Kubernetes Monitoring with Prometheus and Grafana",
      tags: ["kubernetes", "monitoring", "devops"],
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
            Troubleshooting Common Kubernetes Pod Errors
          </h1>
          <p className="blog-description">
            A comprehensive guide to diagnosing and fixing ImagePullBackOff,
            CrashLoopBackOff, and other common Kubernetes pod issues
          </p>
          <div className="blog-meta">
            <span className="blog-timestamp">March 3, 2025</span>
            <span className="blog-category">DevOps</span>
            <span className="blog-reading-time">15 min read</span>
          </div>
        </header>

        <div className="blog-featured-image-container">
          <img
            src="https://cloud2data.com/wp-content/uploads/2023/05/Kubernetes.png"
            alt="Kubernetes pod errors on a terminal screen"
            className="blog-featured-image"
          />
        </div>

        <div className="blog-content">
          <p>
            Kubernetes has become the de facto standard for container
            orchestration, but with its power comes complexity. When working
            with Kubernetes, you'll inevitably encounter pod errors that can be
            challenging to diagnose and resolve. In this comprehensive guide,
            we'll explore the most common Kubernetes pod errors—from
            ImagePullBackOff and CrashLoopBackOff to less common but equally
            frustrating issues—and provide practical steps to resolve them.
          </p>

          <h2>Understanding Pod Lifecycle and Error States</h2>

          <p>
            Before diving into specific errors, it's important to understand how
            Kubernetes manages pod lifecycles. A pod can go through various
            phases: Pending, Running, Succeeded, Failed, and Unknown. When
            something goes wrong, Kubernetes provides status information through
            events and pod statuses to help you diagnose the issue.
          </p>

          <div className="code-block">
            <pre>
              <code>{`# Command to check pod status
kubectl get pods

# Command to get detailed information about a pod
kubectl describe pod <pod-name>

# Command to check pod logs
kubectl logs <pod-name>

# Command to check previous container logs if the container has restarted
kubectl logs <pod-name> --previous`}</code>
            </pre>
          </div>

          <p>Let's explore common pod error states and how to resolve them.</p>

          <h2>
            ImagePullBackOff: When Kubernetes Can't Retrieve Your Container
            Image
          </h2>

          <p>
            ImagePullBackOff is one of the most common pod errors. It occurs
            when Kubernetes cannot pull the container image from the specified
            registry.
          </p>

          <div className="code-block">
            <pre>
              <code>{`$ kubectl get pods
NAME                              READY   STATUS             RESTARTS   AGE
myapp-deployment-779f8b5f-8zcml   0/1     ImagePullBackOff   0          5m`}</code>
            </pre>
          </div>

          <h3>Common Causes of ImagePullBackOff</h3>

          <ol>
            <li>
              <strong>Invalid image name or tag</strong>: Misspelled image name
              or non-existent tag version
            </li>
            <li>
              <strong>Private registry authentication issues</strong>: Missing
              or invalid registry credentials
            </li>
            <li>
              <strong>Network connectivity problems</strong>: Inability to reach
              the container registry
            </li>
            <li>
              <strong>Rate limiting</strong>: Exceeding Docker Hub's pull rate
              limits
            </li>
            <li>
              <strong>Registry availability</strong>: Container registry is down
              or unreachable
            </li>
          </ol>

          <h3>How to Fix ImagePullBackOff</h3>

          <p>
            To diagnose and fix ImagePullBackOff issues, follow these steps:
          </p>

          <div className="code-block">
            <pre>
              <code>{`# Check detailed information about the pod to see the exact error
kubectl describe pod <pod-name>

# Look for events like:
Failed to pull image "myapp:latest": rpc error: code = Unknown desc = Error response from daemon: 
manifest for myapp:latest not found: manifest unknown: manifest unknown`}</code>
            </pre>
          </div>

          <h4>1. Verify Image Name and Tag</h4>

          <p>
            Check your pod or deployment YAML file to ensure the image name and
            tag are correct:
          </p>

          <div className="code-block">
            <pre>
              <code>{`# Correct image reference in deployment.yaml
spec:
  containers:
  - name: myapp
    image: myregistry.com/myapp:1.2.3  # Make sure this exactly matches your registry`}</code>
            </pre>
          </div>

          <h4>2. Set Up Private Registry Authentication</h4>

          <p>
            If you're using a private registry, create a Kubernetes secret with
            your credentials:
          </p>

          <div className="code-block">
            <pre>
              <code>{`# Create a secret with your registry credentials
kubectl create secret docker-registry regcred \\
  --docker-server=<your-registry-server> \\
  --docker-username=<your-username> \\
  --docker-password=<your-password> \\
  --docker-email=<your-email>

# Then reference it in your pod spec
spec:
  containers:
  - name: myapp
    image: myregistry.com/myapp:1.2.3
  imagePullSecrets:
  - name: regcred`}</code>
            </pre>
          </div>

          <h4>3. Check Network Connectivity</h4>

          <p>
            Verify that your Kubernetes nodes can reach the container registry:
          </p>

          <div className="code-block">
            <pre>
              <code>{`# Run a debug pod to test connectivity
kubectl run debug --rm -it --image=alpine -- sh

# Inside the debug pod
ping myregistry.com
wget -q -O- https://myregistry.com/v2/`}</code>
            </pre>
          </div>

          <h4>4. Address Rate Limiting</h4>

          <p>If you're hitting Docker Hub's rate limits, consider:</p>

          <ul>
            <li>Upgrading to a paid Docker Hub account</li>
            <li>Using a private registry or mirror</li>
            <li>Implementing pull-through caching</li>
            <li>
              Adding the imagePullPolicy: IfNotPresent to reduce pull requests
            </li>
          </ul>

          <blockquote>
            Always use specific version tags instead of 'latest' to avoid
            unexpected changes and improve caching.
          </blockquote>

          <h2>CrashLoopBackOff: When Your Container Keeps Restarting</h2>

          <p>
            CrashLoopBackOff occurs when a container starts but exits
            unexpectedly, causing Kubernetes to repeatedly restart it with an
            exponential back-off delay.
          </p>

          <div className="code-block">
            <pre>
              <code>{`$ kubectl get pods
NAME                              READY   STATUS             RESTARTS   AGE
myapp-deployment-779f8b5f-8zcml   0/1     CrashLoopBackOff   5          10m`}</code>
            </pre>
          </div>

          <h3>Common Causes of CrashLoopBackOff</h3>

          <ol>
            <li>
              <strong>Application errors</strong>: Your application is crashing
              due to bugs or misconfigurations
            </li>
            <li>
              <strong>Missing dependencies</strong>: Required files, libraries,
              or services are unavailable
            </li>
            <li>
              <strong>Resource constraints</strong>: The pod doesn't have enough
              CPU or memory
            </li>
            <li>
              <strong>Configuration issues</strong>: Incorrect environment
              variables or configuration files
            </li>
            <li>
              <strong>Liveness probe failures</strong>: Health checks are
              failing
            </li>
          </ol>

          <h3>How to Fix CrashLoopBackOff</h3>

          <p>To diagnose and resolve CrashLoopBackOff issues:</p>

          <h4>1. Check Container Logs</h4>

          <div className="code-block">
            <pre>
              <code>{`# View logs from the crashing container
kubectl logs <pod-name>

# If the container has restarted, check the previous container's logs
kubectl logs <pod-name> --previous`}</code>
            </pre>
          </div>

          <h4>2. Debug Application Initialization</h4>

          <p>
            Temporarily override the container's command to keep it running even
            if your application fails:
          </p>

          <div className="code-block">
            <pre>
              <code>{`# Modify deployment to override the container command
spec:
  containers:
  - name: myapp
    image: myapp:1.2.3
    command: ["sleep", "3600"]  # Override with sleep to debug
    
# Then exec into the running container
kubectl exec -it <pod-name> -- sh

# Inside the container, try running your application manually
/app/start.sh  # Or whatever your application's entrypoint is`}</code>
            </pre>
          </div>

          <h4>3. Check Resource Constraints</h4>

          <p>Verify if the pod is being terminated due to resource limits:</p>

          <div className="code-block">
            <pre>
              <code>{`# Check if the pod is being OOMKilled
kubectl describe pod <pod-name> | grep -i kill

# Increase resource limits if needed
resources:
  requests:
    memory: "128Mi"
    cpu: "100m"
  limits:
    memory: "256Mi"
    cpu: "500m"`}</code>
            </pre>
          </div>

          <h4>4. Review Environment Variables and Configurations</h4>

          <p>Check if the required environment variables are set correctly:</p>

          <div className="code-block">
            <pre>
              <code>{`# View current environment variables
kubectl exec <pod-name> -- env

# Check config maps and secrets being used
kubectl describe pod <pod-name> | grep -A 10 Environment`}</code>
            </pre>
          </div>

          <h4>5. Fix Liveness Probes</h4>

          <p>
            Ensure your liveness probes aren't too strict or checking too early:
          </p>

          <div className="code-block">
            <pre>
              <code>{`livenessProbe:
  httpGet:
    path: /health
    port: 8080
  initialDelaySeconds: 30  # Give your app time to start
  periodSeconds: 10
  failureThreshold: 3      # Allow some failures before restarting`}</code>
            </pre>
          </div>

          <h2>Other Common Kubernetes Pod Errors</h2>

          <h3>1. ContainerCreating</h3>

          <p>
            The ContainerCreating status indicates that Kubernetes is still
            setting up the container.
          </p>

          <h4>Common Causes and Solutions:</h4>

          <ul>
            <li>
              <strong>Volume mounting issues</strong>: Check if the specified
              volumes exist and are accessible
            </li>
            <li>
              <strong>Node resource constraints</strong>: Verify if the node has
              enough resources
            </li>
            <li>
              <strong>Container runtime issues</strong>: Check if containerd or
              Docker is running correctly on the node
            </li>
          </ul>

          <div className="code-block">
            <pre>
              <code>{`# Get detailed events
kubectl describe pod <pod-name>

# Check node capacity and allocatable resources
kubectl describe node <node-name>`}</code>
            </pre>
          </div>

          <h3>2. Pending Status</h3>

          <p>
            Pods stuck in Pending status usually indicate scheduling problems.
          </p>

          <h4>Common Causes and Solutions:</h4>

          <ul>
            <li>
              <strong>Insufficient cluster resources</strong>: Not enough CPU,
              memory, or GPU resources available
            </li>
            <li>
              <strong>Node selector constraints</strong>: No nodes match the
              specified node selectors or affinity rules
            </li>
            <li>
              <strong>PersistentVolumeClaim issues</strong>: Waiting for a PVC
              to be bound
            </li>
            <li>
              <strong>Taints and tolerations</strong>: Pod cannot be scheduled
              due to node taints
            </li>
          </ul>

          <div className="code-block">
            <pre>
              <code>{`# Check if there are any events explaining why the pod is pending
kubectl describe pod <pod-name>

# Check cluster-wide resource usage
kubectl top nodes

# Look for PVC issues
kubectl get pvc`}</code>
            </pre>
          </div>

          <h3>3. Error or Unknown Status</h3>

          <p>These statuses typically indicate node-level problems.</p>

          <h4>Common Causes and Solutions:</h4>

          <ul>
            <li>
              <strong>Node failures</strong>: Check if the node is healthy and
              connected to the control plane
            </li>
            <li>
              <strong>Kubelet issues</strong>: Verify kubelet service is running
              on the node
            </li>
            <li>
              <strong>Network partitioning</strong>: Check network connectivity
              between nodes
            </li>
          </ul>

          <div className="code-block">
            <pre>
              <code>{`# Check node status
kubectl get nodes

# View node details
kubectl describe node <node-name>

# Check kubelet logs on the problematic node
ssh <node> journalctl -u kubelet`}</code>
            </pre>
          </div>

          <h3>4. Evicted</h3>

          <p>Pods can be evicted when a node is under resource pressure.</p>

          <h4>Common Causes and Solutions:</h4>

          <ul>
            <li>
              <strong>Node out of memory</strong>: The node doesn't have enough
              memory
            </li>
            <li>
              <strong>Node out of disk space</strong>: The node's disk is full
            </li>
            <li>
              <strong>Node pressure eviction</strong>: kubelet is proactively
              evicting pods due to resource pressure
            </li>
          </ul>

          <div className="code-block">
            <pre>
              <code>{`# Find evicted pods
kubectl get pods --field-selector=status.phase=Failed | grep Evicted

# Check node conditions
kubectl describe node <node-name> | grep -A 5 Conditions

# Set proper resource requests to help scheduler make better decisions
resources:
  requests:
    memory: "128Mi"
    cpu: "100m"`}</code>
            </pre>
          </div>

          <h3>5. CreateContainerConfigError</h3>

          <p>
            This error occurs when Kubernetes cannot create a container due to
            configuration issues.
          </p>

          <h4>Common Causes and Solutions:</h4>

          <ul>
            <li>
              <strong>Invalid ConfigMap or Secret references</strong>:
              Referenced ConfigMaps or Secrets don't exist
            </li>
            <li>
              <strong>Volume mount problems</strong>: Specified volume mounts
              are invalid
            </li>
            <li>
              <strong>Permission issues</strong>: Cannot access required
              resources due to RBAC constraints
            </li>
          </ul>

          <div className="code-block">
            <pre>
              <code>{`# Check if referenced ConfigMaps exist
kubectl get configmap

# Check if referenced Secrets exist
kubectl get secret

# Verify service account permissions
kubectl auth can-i --list --as=system:serviceaccount:<namespace>:<serviceaccount>`}</code>
            </pre>
          </div>

          <h2>Preventive Measures and Best Practices</h2>

          <p>
            Prevent common Kubernetes pod errors by implementing these best
            practices:
          </p>

          <h3>1. Implement Proper Liveness and Readiness Probes</h3>

          <div className="code-block">
            <pre>
              <code>{`readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  initialDelaySeconds: 10
  periodSeconds: 5

livenessProbe:
  httpGet:
    path: /health
    port: 8080
  initialDelaySeconds: 30
  periodSeconds: 15`}</code>
            </pre>
          </div>

          <h3>2. Set Resource Requests and Limits</h3>

          <div className="code-block">
            <pre>
              <code>{`resources:
  requests:
    memory: "128Mi"
    cpu: "100m"
  limits:
    memory: "256Mi"
    cpu: "500m"`}</code>
            </pre>
          </div>

          <h3>3. Use Init Containers for Dependencies</h3>

          <div className="code-block">
            <pre>
              <code>{`initContainers:
- name: init-db-ready
  image: busybox:1.28
  command: ['sh', '-c', 'until nslookup mysql; do echo waiting for mysql; sleep 2; done;']`}</code>
            </pre>
          </div>

          <h3>4. Implement Pod Disruption Budgets</h3>

          <div className="code-block">
            <pre>
              <code>{`apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: myapp-pdb
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: myapp`}</code>
            </pre>
          </div>

          <h3>5. Use Pod Lifecycle Hooks</h3>

          <div className="code-block">
            <pre>
              <code>{`lifecycle:
  postStart:
    exec:
      command: ["/bin/sh", "-c", "echo Hello from the postStart handler > /usr/share/message"]
  preStop:
    exec:
      command: ["/bin/sh","-c","nginx -s quit; while killall -0 nginx; do sleep 1; done"]`}</code>
            </pre>
          </div>

          <h2>Tools for Debugging Kubernetes Pods</h2>

          <p>These tools can make debugging Kubernetes pod issues easier:</p>

          <ul>
            <li>
              <strong>kubectl plugins</strong>: krew, stern, kail,
              kubectx/kubens
            </li>
            <li>
              <strong>K9s</strong>: Terminal-based UI for managing Kubernetes
              clusters
            </li>
            <li>
              <strong>Lens</strong>: Kubernetes IDE for simplified cluster
              management
            </li>
            <li>
              <strong>Telepresence</strong>: Local development against a remote
              Kubernetes cluster
            </li>
            <li>
              <strong>kubetail</strong>: Aggregate logs from multiple pods
            </li>
          </ul>

          <h2>Conclusion</h2>

          <p>
            Troubleshooting Kubernetes pod errors can be challenging, but with a
            systematic approach, you can quickly identify and resolve issues.
            The key is understanding the common error patterns like
            ImagePullBackOff and CrashLoopBackOff, knowing where to look for
            diagnostic information, and applying the appropriate fixes.
          </p>

          <p>
            By implementing preventive measures like proper health checks,
            resource limits, and init containers, you can make your Kubernetes
            deployments more robust and reduce the frequency of pod errors.
            Remember that Kubernetes provides a wealth of information through
            its events, logs, and status reports—learning how to effectively use
            these resources is essential for maintaining healthy clusters.
          </p>
        </div>

        <div className="blog-author">
          <div className="blog-author-image">
            <img src="https://via.placeholder.com/60" alt="Author" />
          </div>
          <div className="blog-author-info">
            <h3>Miguel Marco Ramcharan</h3>
            <p>Fullstack Developer based in Durban, South Africa</p>
          </div>
        </div>

        <footer className="blog-footer">
          <div className="blog-tags">
            <span>Kubernetes</span>
            <span>DevOps</span>
            <span>Troubleshooting</span>
            <span>Containers</span>
            <span>Cloud</span>
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
          font-size: 1.5rem;
          font-weight: 600;
          margin: 30px 0 16px;
          color: #ffffff;
        }

        .blog-content h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 25px 0 14px;
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

export default KubernetesErrorsBlog;
