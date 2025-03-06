import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShare, FaBookmark } from "react-icons/fa";

const Six = () => {
  const navigate = useNavigate();

  // Similar blog data
  const similarBlogs = [
    {
      id: 1,
      title: "Flutter vs React Native: Choosing the Right Framework",
      tags: ["flutter", "react-native", "mobile"],
      image:
        "https://th.bing.com/th/id/R.796523382777357d18ba619048335003?rik=hi%2f%2bPd07IRqj%2fA&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      title: "Implementing Authentication in React Native with Firebase",
      tags: ["react-native", "firebase", "authentication"],
      image:
        "https://th.bing.com/th/id/R.796523382777357d18ba619048335003?rik=hi%2f%2bPd07IRqj%2fA&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      title: "Optimizing Performance in React Native Applications",
      tags: ["react-native", "performance", "optimization"],
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
          <button onClick={function() { navigate(-1); }} className="blog-back-button">
            <FaArrowLeft /> Back to blogs
          </button>
        </nav>

        <header className="blog-header">
          <h1 className="blog-title">
            Building Cross-Platform Mobile Apps with React Native
          </h1>
          <p className="blog-description">
            Learn how to create powerful, native-like mobile applications for iOS and Android using a single codebase with React Native
          </p>
          <div className="blog-meta">
            <span className="blog-timestamp">March 5, 2025</span>
            <span className="blog-category">Mobile Development</span>
            <span className="blog-reading-time">12 min read</span>
          </div>
        </header>

        <div className="blog-featured-image-container">
          <img
            src="https://th.bing.com/th/id/R.796523382777357d18ba619048335003?rik=hi%2f%2bPd07IRqj%2fA&pid=ImgRaw&r=0"
            alt="React Native development showing code and mobile devices"
            className="blog-featured-image"
          />
        </div>

        <div className="blog-content">
          <p>
            React Native has revolutionized mobile app development by enabling developers 
            to create applications for multiple platforms using a single JavaScript codebase. 
            In this comprehensive guide, we'll explore how React Native works, why it's become 
            so popular, and how to build your first cross-platform mobile application.
          </p>

          <h2>What is React Native?</h2>

          <p>
            React Native is an open-source framework developed by Facebook (now Meta) 
            that allows you to build mobile applications using JavaScript and React. 
            Unlike hybrid frameworks that render within a WebView, React Native 
            compiles to native components, giving your apps the look, feel, and 
            performance of native applications.
          </p>

          <blockquote>
            "Learn once, write anywhere" is React Native's core philosophy, emphasizing 
            the ability to transfer React knowledge to build apps across multiple platforms.
          </blockquote>

          <h2>Prerequisites</h2>

          <p>
            Before we dive into building with React Native, make sure you have the following:
          </p>

          <ul>
            <li>Node.js (version 14 or newer)</li>
            <li>NPM or Yarn package manager</li>
            <li>Basic knowledge of JavaScript and React</li>
            <li>Android Studio (for Android development)</li>
            <li>Xcode (for iOS development, macOS only)</li>
            <li>A code editor (VS Code recommended)</li>
          </ul>

          <h2>Step 1: Setting Up Your Development Environment</h2>

          <p>
            Let's start by setting up your development environment. You have two options:
          </p>

          <ol>
            <li>
              <strong>Expo CLI</strong>: A managed development environment with simplified setup
            </li>
            <li>
              <strong>React Native CLI</strong>: The traditional approach with more control
            </li>
          </ol>

          <p>
            For beginners, I recommend using Expo CLI, as it simplifies many aspects of development.
            Let's install it:
          </p>

          <div className="code-block">
            <pre>
              <code>{`# Install Expo CLI globally
npm install -g expo-cli

# Create a new project
expo init MyFirstApp

# Select a template (e.g., blank)
# Navigate to project directory
cd MyFirstApp

# Start the development server
expo start`}</code>
            </pre>
          </div>

          <p>
            Once you run <code>expo start</code>, a QR code will appear in your terminal. 
            You can scan this with the Expo Go app on your physical device or run it on 
            simulators/emulators to see your app in action.
          </p>

          <h2>Step 2: Understanding React Native Components</h2>

          <p>
            React Native provides a set of built-in components that map directly to 
            native platform components. Let's explore some of the fundamental components:
          </p>

          <div className="code-block">
            <pre>
              <code>{`import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BasicComponents = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native</Text>
      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
        style={styles.logo} 
      />
      <TouchableOpacity style={styles.button} onPress={() => alert('Button pressed!')}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0066cc',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default BasicComponents;`}</code>
            </pre>
          </div>

          <p>
            In this example, we've used several core React Native components:
          </p>

          <ul>
            <li><code>View</code>: Equivalent to a <code>div</code> in web development</li>
            <li><code>Text</code>: For displaying text</li>
            <li><code>Image</code>: For displaying images</li>
            <li><code>TouchableOpacity</code>: For creating touchable elements with feedback</li>
            <li><code>StyleSheet</code>: For creating styles (similar to CSS, but with camelCase properties)</li>
          </ul>

          <h2>Step 3: Handling Navigation</h2>

          <p>
            Most applications require navigation between screens. React Native has several 
            libraries for this, but the most popular is React Navigation. Let's set it up:
          </p>

          <div className="code-block">
            <pre>
              <code>{`# Install React Navigation
npm install @react-navigation/native

# Install dependencies
expo install react-native-screens react-native-safe-area-context

# Install the stack navigator
npm install @react-navigation/stack

# For Expo, you might also need
expo install react-native-gesture-handler`}</code>
            </pre>
          </div>

          <p>
            Now, let's create a simple navigation structure:
          </p>

          <div className="code-block">
            <pre>
              <code>{`import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'My Home' }} 
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ title: 'Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;`}</code>
            </pre>
          </div>

          <p>
            To navigate between screens, you can use the <code>navigation</code> prop:
          </p>

          <div className="code-block">
            <pre>
              <code>{`// In HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { itemId: 86 })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;`}</code>
            </pre>
          </div>

          <h2>Step 4: Working with API Data</h2>

          <p>
            Most mobile apps need to fetch data from APIs. React Native uses the same 
            Fetch API available in modern browsers. Let's create a simple example that 
            fetches and displays data:
          </p>

          <div className="code-block">
            <pre>
              <code>{`import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

const UsersScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data');
        setLoading(false);
        console.error(error);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0066cc" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Text style={styles.userName}>{item.name}</Text>
            <Text style={styles.userEmail}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmail: {
    color: '#666',
    marginTop: 4,
  },
  error: {
    color: 'red',
    fontSize: 18,
  },
});

export default UsersScreen;`}</code>
            </pre>
          </div>

          <h2>Step 5: Adding Platform-Specific Code</h2>

          <p>
            Sometimes you need different behavior or styling for iOS and Android. 
            React Native provides several ways to handle platform-specific code:
          </p>

          <div className="code-block">
            <pre>
              <code>{`import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const PlatformSpecificComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This text has platform-specific styling
      </Text>
      
      {Platform.OS === 'ios' ? (
        <Text>This text only shows on iOS</Text>
      ) : (
        <Text>This text only shows on Android</Text>
      )}
      
      <Text style={styles.platformText}>
        Platform-specific styling via Platform.select
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
  },
  text: {
    fontSize: 18,
    ...Platform.select({
      ios: {
        fontFamily: 'Helvetica',
        color: '#007AFF',
      },
      android: {
        fontFamily: 'Roboto',
        color: '#3DDC84',
      },
    }),
  },
  platformText: {
    marginTop: 20,
    padding: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});

export default PlatformSpecificComponent;`}</code>
            </pre>
          </div>

          <h2>Step 6: Debugging Your React Native App</h2>

          <p>
            Debugging is an essential part of development. React Native offers several tools:
          </p>

          <ul>
            <li>
              <strong>React Native Debugger</strong>: A standalone app that provides an enhanced debugging experience
            </li>
            <li>
              <strong>Flipper</strong>: Facebook's mobile app debugger for iOS and Android
            </li>
            <li>
              <strong>Chrome Developer Tools</strong>: Access via the Debug menu in your app
            </li>
          </ul>

          <p>
            To use the Chrome Developer Tools, shake your device or press <code>Cmd+D</code> (iOS simulator) or 
            <code>Ctrl+M</code> (Android emulator) and select "Debug JS Remotely."
          </p>

          <h2>Step 7: Publishing Your App</h2>

          <p>
            When your app is ready for users, you'll need to prepare it for the app stores:
          </p>

          <h3>For Expo projects:</h3>

          <div className="code-block">
            <pre>
              <code>{`# Build for Android
expo build:android

# Build for iOS
expo build:ios`}</code>
            </pre>
          </div>

          <h3>For React Native CLI projects:</h3>

          <p>
            The process is more involved and requires generating signed bundles/APKs for Android 
            and archives for iOS. Refer to the React Native documentation for detailed instructions.
          </p>

          <h2>Best Practices for React Native Development</h2>

          <ol>
            <li>
              <strong>Component Reusability</strong>: Create reusable components to maintain consistency and reduce code duplication
            </li>
            <li>
              <strong>State Management</strong>: For complex apps, consider using Redux, MobX, or React Context API
            </li>
            <li>
              <strong>Performance Optimization</strong>: Use <code>React.memo</code> for component memoization, <code>useCallback</code> for function memoization
            </li>
            <li>
              <strong>Native Modules</strong>: When you need functionality not available in JavaScript, create native modules
            </li>
            <li>
              <strong>Testing</strong>: Implement unit tests with Jest and UI tests with Detox or Appium
            </li>
          </ol>

          <h2>Common Challenges and Solutions</h2>

          <h3>1. Layout Issues</h3>
          <p>
            React Native uses Flexbox for layout, but it differs slightly from CSS on the web. Ensure you understand 
            how Flexbox works in React Native context. The default flexDirection is 'column' instead of 'row'.
          </p>

          <h3>2. Performance</h3>
          <p>
            For smooth animations, use the Animated API instead of changing state. Avoid unnecessary re-renders and 
            optimize your list rendering with <code>FlatList</code> instead of <code>ScrollView</code> for long lists.
          </p>

          <h3>3. Native Module Integration</h3>
          <p>
            When you need to access native functionality, check if there's an existing library before writing your own. 
            The React Native community has created libraries for most common needs.
          </p>

          <h2>Conclusion</h2>

          <p>
            React Native offers a powerful way to build cross-platform mobile applications with a familiar React syntax. 
            By leveraging JavaScript skills, developers can create high-quality mobile experiences without learning multiple 
            platform-specific languages and frameworks.
          </p>

          <p>
            As the ecosystem continues to evolve, React Native remains a top choice for businesses and developers looking 
            to efficiently develop and maintain applications across iOS and Android. With the foundation laid in this guide, 
            you're ready to start your journey into React Native development and create amazing cross-platform experiences.
          </p>
        </div>

        <div className="blog-author">
          <div className="blog-author-image">
            <img src="https://via.placeholder.com/60" alt="Author" />
          </div>
          <div className="blog-author-info">
            <h3>Jordan Wright</h3>
            <p>Mobile Developer based in Seattle, Washington</p>
          </div>
        </div>

        <footer className="blog-footer">
          <div className="blog-tags">
            <span>React Native</span>
            <span>Mobile</span>
            <span>JavaScript</span>
            <span>Cross-Platform</span>
            <span>iOS</span>
            <span>Android</span>
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
          color: #f0f0f0;
        }

        .blog-content ul,
        .blog-content ol {
          margin-bottom: 24px;
          padding-left: 20px;
        }

        .blog-content li {
          margin-bottom: 8px;
        }

        .blog-content code {
          background-color: #1a1a1a;
          padding: 2px 5px;
          border-radius: 4px;
          font-family: "Fira Code", monospace;
          font-size: 0.9em;
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
          background-color: transparent;
          padding: 0;
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

export default Six;