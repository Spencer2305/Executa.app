"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Rocket, ArrowLeft, Users, Bell, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Success Icon */}
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20">
            <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">You're on the list!</h1>
            <p className="text-muted-foreground">Welcome to the Executa waitlist</p>
          </div>
        </motion.div>

        {/* Thank You Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader className="text-center space-y-1">
              <CardTitle className="text-xl">Thank you for joining!</CardTitle>
              <CardDescription>
                You're now part of an exclusive group getting early access to the future of AI assistants
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* What's Next */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm">What happens next:</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bell className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">We'll notify you first</p>
                      <p className="text-xs text-muted-foreground">Get early access before the public launch</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Star className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Exclusive features</p>
                      <p className="text-xs text-muted-foreground">Beta access to cutting-edge AI capabilities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Priority support</p>
                      <p className="text-xs text-muted-foreground">Direct access to our team for help and feedback</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button asChild className="w-full">
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
                
                <Button asChild variant="outline" className="w-full">
                  <Link href="mailto:info@executasolutions.com?subject=Waitlist Question">
                    Questions? Contact Us
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Share */}
        <motion.div 
          className="bg-muted/50 rounded-lg p-4 text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="font-semibold text-sm">Help us spread the word</h3>
          <p className="text-xs text-muted-foreground">
            Know someone who could benefit from AI assistants? Share Executa with them!
          </p>
          <Button asChild variant="ghost" size="sm" className="text-xs">
            <Link href="/">
              <Rocket className="mr-2 h-3 w-3" />
              Share Executa
            </Link>
          </Button>
        </motion.div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Follow us for updates and behind-the-scenes content
          </p>
        </div>
      </div>
    </div>
  );
} 