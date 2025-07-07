import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { insertWaitlistSignupSchema, type InsertWaitlistSignup } from "@shared/schema";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function WaitlistSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertWaitlistSignup>({
    resolver: zodResolver(insertWaitlistSignupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      referralSource: "",
    },
  });

  const { data: waitlistCount } = useQuery({
    queryKey: ['/api/waitlist/count'],
  });

  const waitlistMutation = useMutation({
    mutationFn: async (data: InsertWaitlistSignup) => {
      const response = await apiRequest('/api/waitlist', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Welcome to the waitlist!",
        description: "You'll be notified when Gliding launches.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['/api/waitlist/count'] });
    },
    onError: (error: any) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertWaitlistSignup) => {
    waitlistMutation.mutate(data);
  };

  return (
    <section id="waitlist" className="py-8 sm:py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto"
        >
          Join thousands of users who have already simplified their peer-to-peer lending relationships.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Signup Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 sm:p-8 rounded-2xl border border-gray-100"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="First Name"
                            {...field}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Last Name"
                            {...field}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your email address"
                          {...field}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="referralSource"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent">
                            <SelectValue placeholder="How did you hear about us?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="social_media">Social Media</SelectItem>
                          <SelectItem value="friend_referral">Friend Referral</SelectItem>
                          <SelectItem value="search_engine">Search Engine</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    disabled={waitlistMutation.isPending}
                    className="w-full bg-primary text-white px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg"
                  >
                    {waitlistMutation.isPending ? "Joining..." : "Join the Waitlist"}
                  </Button>
                </motion.div>
              </form>
            </Form>

            <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="h-4 w-4 text-primary mr-2" />
                <span>{(waitlistCount as any)?.count || 0}+ on waitlist</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-secondary mr-2" />
                <span>Launching Q2 2024</span>
              </div>
            </div>
          </motion.div>

          {/* Mobile App Preview */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-900 rounded-3xl p-2 shadow-2xl max-w-xs"
            >
              <div className="bg-white rounded-2xl aspect-[9/16] p-4 overflow-hidden">
                {/* Status bar */}
                <div className="flex justify-between items-center mb-4 text-xs text-gray-600">
                  <span>9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <div className="w-6 h-3 border border-gray-300 rounded-sm">
                      <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                    </div>
                  </div>
                </div>

                {/* Welcome screen */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Welcome to Gliding!</h3>
                  <p className="text-xs text-gray-600 mb-6">Your journey to effortless loan tracking starts here</p>
                </div>

                {/* Quick setup steps */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 bg-primary/5 p-3 rounded-xl border border-primary/20">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Add contacts</p>
                      <p className="text-xs text-gray-600">Import your lending circle</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-secondary/5 p-3 rounded-xl border border-secondary/20">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Track loans</p>
                      <p className="text-xs text-gray-600">Log money lent and borrowed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-accent/5 p-3 rounded-xl border border-accent/20">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">View insights</p>
                      <p className="text-xs text-gray-600">Understand your finances</p>
                    </div>
                  </div>
                </div>

                {/* Get started button */}
                <div className="mt-6">
                  <div className="bg-primary text-white py-3 px-4 rounded-xl text-center">
                    <span className="text-sm font-semibold">Get Started</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}