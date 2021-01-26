<?php

namespace App\Helpers;
use Illuminate\Support\Arr as ParentClass;

class Arr extends ParentClass
{
    /**
     * Create array by object fields.
     *
     * @param array $arr
     * @param object $object
     * @return array
     */
    public static function fillArrayByObject(array $arr, object $object): array
    {
        $resultArr = [];
        foreach ($arr as $value) {
            $resultArr[$value] = $object->$value;
        }
        return $resultArr;
    }

    /**
     * Rename key in array.
     *
     * @param array $arr
     * @param string $oldKeyName
     * @param string $newKeyName
     * @return void
     *
     */
    public static function renameKey(array &$arr, string $oldKeyName, string $newKeyName): void
    {
        $arr[$newKeyName] = $arr[$oldKeyName];
        unset($arr[$oldKeyName]);
    }
}
