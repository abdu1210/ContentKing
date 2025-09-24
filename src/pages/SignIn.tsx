import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
                <CardDescription className="text-lg">
                  Welcome back! Please sign in to your account.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="Enter your password" 
                      required 
                    />
                  </div>
                  <div className="space-y-4 pt-4">
                    <Button type="submit" className="w-full" size="lg">
                      Sign In
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" asChild>
                      <Link to="/signup">
                        Create Account
                      </Link>
                    </Button>
                  </div>
                </form>
                <div className="text-center pt-4">
                  <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                    Forgot your password?
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SignIn;