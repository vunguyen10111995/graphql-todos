<?php
/**
 * Created by PhpStorm.
 * User: nguyenvanvu
 * Date: 06/11/2018
 * Time: 16:37
 */

namespace App\Resource;

use League\Fractal\TransformerAbstract;

class User extends TransformerAbstract
{
    public function transform(\App\User $user)
    {
        return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'profile' => [
                'address' => $user->profile->address,
                'company' => $user->profile->company,
                'dob' => $user->profile->dob
            ]
        ];
    }
}
