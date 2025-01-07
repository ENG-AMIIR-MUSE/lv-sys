import { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@radix-ui/react-dropdown-menu';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        user_type: 'job_seeker',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="flex justify-center items-center  ">
                <Card className="w-full max-w-md border-none    ">
                    <CardHeader>
                        <CardTitle>Register</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit}>
                            <div>
                                <InputLabel htmlFor="name" value="Name" />

                                <Input
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />

                                {errors.name && (
                                    <div className="text-red-500 text-sm">
                                        {errors.name}
                                    </div>
                                )}
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="email" value="Email" />

                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />

                                {errors.email && (
                                    <div className="text-red-500 text-sm">
                                        {errors.email}
                                    </div>
                                )}
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="user_type" value="User Type" />

                                <Select
                                    value={data.user_type}
                                    onValueChange={(value) => setData('user_type', value)}
                                    required
                                >
                                    <SelectTrigger className="mt-1 block w-full">
                                        <SelectValue placeholder="Select user type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="job_seeker">Job Seeker</SelectItem>
                                        <SelectItem value="employer">Employer</SelectItem>
                                     
                                    </SelectContent>
                                </Select>

                                {errors.user_type && (
                                    <div className="text-red-500 text-sm">
                                        {errors.user_type}
                                    </div>
                                )}
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="password" value="Password" />

                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />

                                {errors.password && (
                                    <div className="text-red-500 text-sm">
                                        {errors.password}
                                    </div>
                                )}
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    required
                                />

                                {errors.password_confirmation && (
                                    <div className="text-red-500 text-sm">
                                        {errors.password_confirmation}
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <Link
                                    href={route('login')}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Already registered?
                                </Link>

                                <PrimaryButton className="ml-4" disabled={processing}>
                                    Register
                                </PrimaryButton>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </GuestLayout>
    );
}
