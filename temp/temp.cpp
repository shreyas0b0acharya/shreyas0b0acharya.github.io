while (true) {  
    // Wait to pick up both chopsticks  
    wait(chopstick[i]);  
    wait(chopstick[(i + 1) % 5]);  

    // Eat  
    // (Critical section for eating)  

    // Release both chopsticks  
    signal(chopstick[i]);  
    signal(chopstick[(i + 1) % 5]);  

    // Think  
    // (Non-critical section for thinking)  
}
